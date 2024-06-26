let episodes_most_common = {"behzad": [["Experimental", 4], ["Leftfield", 2]], "bighands": [["Experimental", 2], ["Techno", 2], ["House", 2]], "nodef": [["Dub", 9], ["Roots Reggae", 7], ["Reggae", 2]], "1": [["Techno", 11], ["Breakbeat", 7], ["Grime", 4]], "spirinet": [["Experimental", 6], ["Techno", 4], ["Ambient", 3]], "2": [["Techno", 9], ["Experimental", 4], ["Dubstep", 4]], "3": [["Techno", 11], ["House", 6], ["Dub", 4]], "doubleprecision": [["Techno", 6], ["Experimental", 5], ["Dubstep", 4]], "nicestrangers": [["Experimental", 9], ["Ambient", 5], ["Field Recording", 4]], "7": [["Experimental", 6], ["Dub", 4], ["Techno", 3]], "ojoogyal": [["Experimental", 7], ["Leftfield", 3], ["Techno", 3]], "6": [["Dub", 12], ["Roots Reggae", 8], ["Dancehall", 2]], "kara": [["Techno", 4], ["Ambient", 2], ["Downtempo", 2]], "4": [["Dub", 6], ["Experimental", 4], ["Techno", 2]], "5": [["Techno", 8], ["Dub", 4], ["Dancehall", 3]], "equohm": [["House", 4], ["Dub", 3], ["Techno", 3]], "16": [["Ambient", 10], ["Experimental", 9], ["Techno", 5]], "sarahharas": [["Experimental", 4], ["Ambient", 3], ["Industrial", 3]], "17": [["Ambient", 8], ["Experimental", 6], ["Downtempo", 4]], "15": [["Experimental", 6], ["Techno", 6], ["Dub", 4]], "yips": [["Techno", 6], ["Dub", 4], ["Industrial", 3]], "14": [["Dub", 12], ["Roots Reggae", 8], ["Reggae", 3]], "10": [["Techno", 10], ["Experimental", 4], ["Electro", 4]], "edulcorants": [["Jungle", 5], ["Hardcore", 2], ["Drum n Bass", 2]], "11": [["Experimental", 7], ["Abstract", 5], ["Ambient", 4]], "13": [["Dub", 7], ["Experimental", 6], ["Leftfield", 3]], "orree": [["Techno", 7], ["House", 4], ["Experimental", 4]], "12": [["Techno", 8], ["Ambient", 7], ["Experimental", 7]], "20": [["Ambient", 9], ["Abstract", 8], ["Experimental", 6]], "19": [["Ambient", 8], ["House", 6], ["Experimental", 6]], "matteocoffetti": [["Techno", 4], ["Downtempo", 3], ["Tribal", 2]], "18": [["Ambient", 8], ["Experimental", 8], ["Techno", 5]], "nema": [["Experimental", 5], ["Techno", 2], ["Leftfield", 2]], "8": [["Experimental", 7], ["Techno", 5], ["Abstract", 4]], "9": [["Experimental", 9], ["Abstract", 7], ["Dub", 7]], "ascot": [["Breakbeat", 11], ["Hardcore", 5], ["Techno", 4]], "artsvs": [["Experimental", 5], ["IDM", 2], ["Ambient", 2]], "althia": [["House", 4], ["Techno", 4], ["Deep House", 2]]}

console.log(episodes_most_common)

let genres = new Set();

for (let episode in episodes_most_common){
    for (let cell in episodes_most_common[episode]){
        console.log(cell[0])
        genres.add([episode, cell[0]])
    }
}

console.log(genres)