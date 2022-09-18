import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataSet } from 'vis-data';
import { Network } from 'vis-network';

@Component({
  selector: 'jhi-dependency-dashboard',
  templateUrl: './dependency-dashboard.component.html',
  styleUrls: ['./dependency-dashboard.component.css'],
})
export class DependencyDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('visNetwork', { static: false }) visNetwork!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // create an array with nodes
    let episodes = new Object({
      'Abstract': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-20', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-9', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-11', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-8'],
      'Ambient': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-16', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-20', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-17', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-18'], 
      'Breakbeat': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-1', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-5'], 
      'Breaks': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-1'], 
      'Dancehall': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-1', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-5'], 
      'Downtempo': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-19', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-16', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-17', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-18'], 
      'Dub': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-14', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-6', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-9', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-4'], 
      'Dubstep': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-2', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-5'], 
      'Electro': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-10', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-13'], 
      'Experimental': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-9', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-16', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-18', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-8'], 
      'Gqom': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-3'], 
      'Grime': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-1', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-3'], 
      'House': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-3', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-19', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-18', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-16'], 
      'IDM': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-19'], 
      'Industrial': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-9', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-5', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-7', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-11'], 
      'Leftfield': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-19', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-13', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-16', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-17'], 
      'Noise': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-11'], 
      'Reggae': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-14'], 
      'Roots Reggae': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-14', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-6'], 
      'Techno': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-1', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-3', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-10', 'https://soundcloud.com/aniel-rossi/k-with-sindrome-2'], 
      'Tribal': ['https://soundcloud.com/aniel-rossi/k-with-sindrome-13']
    })

    const nodes = new DataSet<any>([]);

        // create an array with edges
        const edges = new DataSet<any>([]);

    for (let genre in episodes){
      nodes.add({ id: genre, label: genre, color:'#FFF5C9'})
    }

    for (const [key, value] of Object.entries(episodes)) {
      console.log(key)
      for (const [idx, episode] of Object.entries(value)) {
        console.log(episode)
        const str_episode = JSON.stringify(episode);
        console.log(str_episode)
        const myArray = str_episode.split("-");
        console.log(myArray)
        const label = myArray[myArray.length - 1];
        const clean_label = label.replace('"', '')
        console.log(clean_label)
        try {
          nodes.add({ id: episode, size:40, shape: 'image', image: '/assets/img/lowK-' + clean_label + '-remastered.png'})
        }
        catch(error){
          console.log(error)
        }
        edges.add({ from: key, to: episode})
      }
    }

    function isValidHttpUrl(string: any) {
      let url;
      
      try {
        url = new URL(string);
      } catch (_) {
        return false;  
      }
    
      return url.protocol === "http:" || url.protocol === "https:";
    }
    
    console.log(edges)

    const data = { nodes, edges };

    var options = {
      nodes: {
        borderWidth:0,
        color: {
          border: '#222',
        },
      },
      edges: {
        color: {
          color: '#FFFFFF',
          highlight: '#A22'
        },
      }
    }

    const container = this.visNetwork;
    let networkInstance = new Network(container.nativeElement, data, options);

    networkInstance.on('click', function(params) {
      var ids = params.nodes;
      var clickedNodes = nodes.get(ids);
      console.log('clicked nodes:', clickedNodes);
      if (isValidHttpUrl(clickedNodes[0].id))
      {
        open(clickedNodes[0].id)
      }
          
  });

  }
}
