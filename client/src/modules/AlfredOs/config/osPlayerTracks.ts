interface Track {
    metaData: {
        artist: string
        title: string
    };
    url: string;
}

/**
 Winamp initial tracks
 */
export const initialTracks: Track[] = [
    {
        metaData: {
            artist: 'About 18',
            title: 'Moments'
        },
        url: `${process.env.PUBLIC_URL}/assets/music/Moments.mp3`
    },
    {
        metaData: {
            artist: 'About 18',
            title: 'I\'ll be here just for you'
        },
        url: `${process.env.PUBLIC_URL}/assets/music/Here_Just_For_You.mp3`
    },
    {
        metaData: {
            artist: 'About 18',
            title: 'Good night'
        },
        url: `${process.env.PUBLIC_URL}/assets/music/Good_night.mp3`
    },
    {
        metaData: {
            artist: 'About 18',
            title: 'Drama Part 2'
        },
        url: `${process.env.PUBLIC_URL}/assets/music/Drama_Part_2.mp3`
    },
    {
        metaData: {
            artist: 'About 18',
            title: 'Destructive Attraction'
        },
        url: `${process.env.PUBLIC_URL}/assets/music/Destructive_Attraction.mp3`
    },
    {
        metaData: {
            artist: 'About 18',
            title: 'Life'
        },
        url: `${process.env.PUBLIC_URL}/assets/music/Life.mp3`
    },
    {
        metaData: {
            artist: 'About 18',
            title: 'Distance'
        },
        url: `${process.env.PUBLIC_URL}/assets/music/Distance.mp3`
    },
    {
        metaData: {
            artist: 'About 18',
            title: 'Now get out of the way'
        },
        url: `${process.env.PUBLIC_URL}/assets/music/Now_Get_Out_Of_The_Way.mp3`
    }
];