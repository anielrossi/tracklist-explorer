import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataSet } from 'vis-data';
import { Network } from 'vis-network';
import tracks from 'src/assets/json/tracks_json.json';
import descriptions from 'src/assets/json/descriptions_json.json';

@Component({
  selector: 'jhi-dependency-dashboard',
  templateUrl: './dependency-dashboard.component.html',
  styleUrls: ['./dependency-dashboard.component.css'],
})
export class DependencyDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('visNetwork', { static: false }) visNetwork!: ElementRef;

  constructor() {
    console.log(window.innerHeight + "px");
    console.log(window.innerWidth + "px");
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const episodes_most_common = new Object(
      //{"behzad": [["Experimental", 4], ["Leftfield", 2]], "bighands": [["Experimental", 2], ["Techno", 2], ["House", 2]], "nodef": [["Dub", 9], ["Roots Reggae", 7], ["Reggae", 2]], "1": [["Techno", 11], ["Breakbeat", 7], ["Grime", 4], ["Dancehall", 3]], "spirinet": [["Experimental", 6], ["Techno", 4], ["Ambient", 3], ["House", 2]], "2": [["Techno", 9], ["Experimental", 4], ["Dubstep", 4], ["Tribal", 2]], "3": [["Techno", 11], ["House", 6], ["Dub", 4], ["Experimental", 4]], "doubleprecision": [["Techno", 6], ["Experimental", 5], ["Dubstep", 4], ["UK Garage", 2]], "nicestrangers": [["Experimental", 9], ["Ambient", 5], ["Field Recording", 4], ["Electroacoustic", 3]], "7": [["Experimental", 6], ["Dub", 4], ["Techno", 3], ["Ambient", 3]], "ojoogyal": [["Experimental", 7], ["Leftfield", 3], ["Techno", 3], ["Dubstep", 3]], "6": [["Dub", 12], ["Roots Reggae", 8], ["Dancehall", 2]], "kara": [["Techno", 4], ["Ambient", 2], ["Downtempo", 2], ["Trance", 2]], "4": [["Dub", 6], ["Experimental", 4], ["Techno", 2], ["Drum n Bass", 2]], "5": [["Techno", 8], ["Dub", 4], ["Dancehall", 3], ["Industrial", 3]], "equohm": [["House", 4], ["Dub", 3], ["Techno", 3], ["Experimental", 2]], "16": [["Ambient", 10], ["Experimental", 9], ["Techno", 5], ["House", 4]], "sarahharas": [["Experimental", 4], ["Ambient", 3], ["Industrial", 3]], "17": [["Ambient", 8], ["Experimental", 6], ["Downtempo", 4], ["Dub", 4]], "15": [["Experimental", 6], ["Techno", 6], ["Dub", 4], ["Ambient", 3]], "yips": [["Techno", 6], ["Dub", 4], ["Industrial", 3], ["Experimental", 3]], "14": [["Dub", 12], ["Roots Reggae", 8], ["Reggae", 3], ["Dancehall", 2]], "10": [["Techno", 10], ["Experimental", 4], ["Electro", 4], ["Dub", 3]], "edulcorants": [["Jungle", 5], ["Hardcore", 2], ["Drum n Bass", 2]], "11": [["Experimental", 7], ["Abstract", 5], ["Ambient", 4], ["Noise", 4]], "13": [["Dub", 7], ["Experimental", 6], ["Leftfield", 3], ["Techno", 3]], "orree": [["Techno", 7], ["House", 4], ["Experimental", 4], ["Dancehall", 3]], "12": [["Techno", 8], ["Ambient", 7], ["Experimental", 7], ["Dub", 5]], "20": [["Ambient", 9], ["Abstract", 8], ["Experimental", 6]], "19": [["Ambient", 8], ["House", 6], ["Experimental", 6], ["Downtempo", 5]], "matteocoffetti": [["Techno", 4], ["Downtempo", 3], ["Tribal", 2], ["Experimental", 2]], "18": [["Ambient", 8], ["Experimental", 8], ["Techno", 5], ["House", 5]], "nema": [["Experimental", 5], ["Techno", 2], ["Leftfield", 2], ["Industrial", 2]], "8": [["Experimental", 7], ["Techno", 5], ["Abstract", 4], ["Dub", 3]], "9": [["Experimental", 9], ["Abstract", 7], ["Dub", 7], ["Industrial", 5]], "ascot": [["Breakbeat", 11], ["Hardcore", 5], ["Techno", 4], ["Drum n Bass", 2]], "artsvs": [["Experimental", 5], ["IDM", 2], ["Ambient", 2]], "althia": [["House", 4], ["Techno", 4], ["Deep House", 2], ["Tech House", 2]]}
        {"behzad": [["Experimental", 4], ["Leftfield", 2]], "danishdream": [["Live", 9], ["Leftfield", 2]] ,"bighands": [["Experimental", 2], ["Techno", 2], ["House", 2]], "nodef": [["Dub", 9], ["Roots Reggae", 7], ["Reggae", 2]], "1": [["Techno", 11], ["Breakbeat", 7], ["Grime", 4]], "spirinet": [["Experimental", 6], ["Techno", 4], ["Ambient", 3]], "2": [["Techno", 9], ["Experimental", 4], ["Dubstep", 4]], "3": [["Techno", 11], ["House", 6], ["Dub", 4]], "doubleprecision": [["Techno", 6], ["Experimental", 5], ["Dubstep", 4]], "nicestrangers": [["Experimental", 9], ["Ambient", 5], ["Field Recording", 4]], "7": [["Experimental", 6], ["Dub", 4], ["Techno", 3]], "ojoogyal": [["Experimental", 7], ["Leftfield", 3], ["Techno", 3]], "6": [["Dub", 12], ["Roots Reggae", 8], ["Dancehall", 2]], "kara": [["Techno", 4], ["Ambient", 2], ["Downtempo", 2]], "4": [["Dub", 6], ["Experimental", 4], ["Techno", 2]], "5": [["Techno", 8], ["Dub", 4], ["Dancehall", 3]], "equohm": [["House", 4], ["Dub", 3], ["Techno", 3]], "16": [["Ambient", 10], ["Experimental", 9], ["Techno", 5]], "sarahharas": [["Experimental", 4], ["Ambient", 3], ["Industrial", 3]], "17": [["Ambient", 8], ["Experimental", 6], ["Downtempo", 4]], "15": [["Experimental", 6], ["Techno", 6], ["Dub", 4]], "yips": [["Techno", 6], ["Dub", 4], ["Industrial", 3]], "14": [["Dub", 12], ["Roots Reggae", 8], ["Reggae", 3]], "10": [["Techno", 10], ["Experimental", 4], ["Electro", 4]], "edulcorants": [["Jungle", 5], ["Hardcore", 2], ["Drum n Bass", 2]], "11": [["Experimental", 7], ["Abstract", 5], ["Ambient", 4]], "13": [["Dub", 7], ["Experimental", 6], ["Leftfield", 3]], "orree": [["Techno", 7], ["House", 4], ["Experimental", 4]], "12": [["Techno", 8], ["Ambient", 7], ["Experimental", 7]], "20": [["Ambient", 9], ["Abstract", 8], ["Experimental", 6]], "19": [["Ambient", 8], ["House", 6], ["Experimental", 6]], "matteocoffetti": [["Techno", 4], ["Downtempo", 3], ["Tribal", 2]], "18": [["Ambient", 8], ["Experimental", 8], ["Techno", 5]], "nema": [["Experimental", 5], ["Techno", 2], ["Leftfield", 2]], "8": [["Experimental", 7], ["Techno", 5], ["Abstract", 4]], "9": [["Experimental", 9], ["Abstract", 7], ["Dub", 7]], "ascot": [["Breakbeat", 11], ["Hardcore", 5], ["Techno", 4]], "artsvs": [["Experimental", 5], ["IDM", 2], ["Ambient", 2]], "althia": [["House", 4], ["Techno", 4], ["Deep House", 2]]}
      ) 

    const nodes = new DataSet<any>([]);
    const edges = new DataSet<any>();

    for (const [key, value] of Object.entries(episodes_most_common)) {
      let id: string;
      let label: string;
      let size: number;

      if (isNaN(Number(key))) {
        id = "https://soundcloud.com/sindromebasaam/k-sindrome-invites-" + key;
        label = key;
        size = 35;
      } else {
        id = "https://soundcloud.com/sindromebasaam/k-with-sindrome-" + key;
        label = '#' + key;
        size = 300;
      }

      if (window.innerWidth < 900) {
        nodes.add({ id, label, shape: 'circle', color: '#FFF5C9', size });
      } else {
        nodes.add({ id, color: '#FFF5C9', label, title: (<any>tracks)[key], size, shape: 'circle' });
      }

      for (const x of value) {
        try {
          nodes.add({ id: x[0], label: x[0], color: '#FFF5C9' });
        } catch {
          console.log("already exists");
        }
        edges.add({ from: id, to: x[0] });
      }
    }

    function isValidHttpUrl(string: any) {
      try {
        const url = new URL(string);
        return url.protocol === "http:" || url.protocol === "https:";
      } catch (_) {
        return false;
      }
    }

    const data = { nodes, edges };

    const options = {
      nodes: {
        borderWidth: 0,
        color: { border: '#222' },
        shape: 'star'
      },
      edges: {
        color: { color: '#FFFFFF', highlight: '#A22' }
      },
      layout: { improvedLayout: true, randomSeed: 191006 },
      physics: window.innerWidth < 900 ? { barnesHut: { damping: 0.5 } } : undefined
    };

    const container = this.visNetwork;
    const networkInstance = new Network(container.nativeElement, data, options);

    // Mobile double-tap handling
    if (window.innerWidth < 900) {
      let lastTapTime = 0;

      networkInstance.on("click", function (params) {
        const ids = params.nodes;
        if (ids.length === 0) return;

        const clickedNode = nodes.get(ids)[0];
        if (!clickedNode) return;

        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTapTime;

        if (tapLength < 300) {
          // Double-tap detected: open URL
          if (isValidHttpUrl(clickedNode.id)) {
            window.open(clickedNode.id, "_blank");
          }
        } else {
          // Single tap: update node title
          let index = clickedNode.label;
          if (!isNaN(Number(index.substring(1)))) {
            index = index.substring(1);
          }
          clickedNode.title = (<any>tracks)[index];
          console.log("Updated node title:", clickedNode.title);
        }

        lastTapTime = currentTime;
      });
    }
    else{
      // Desktop doubleClick remains
    networkInstance.on('doubleClick', function (params) {
      const ids = params.nodes;
      const clickedNodes = nodes.get(ids);
      console.log('double clicked nodes:', clickedNodes);
      if (clickedNodes.length && isValidHttpUrl(clickedNodes[0].id)) {
        window.open(clickedNodes[0].id, "_blank");
      }
    });
    }

  }
}

// Optional helper
function htmlTitle(html: string) {
  const container = document.createElement("div");
  container.innerHTML = html;
  return container;
}
