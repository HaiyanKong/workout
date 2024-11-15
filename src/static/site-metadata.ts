interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workout',
  siteUrl: '/',
  logo: '',
  description: 'My Workout',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: '180 BPM Playlist',
      url: 'https://open.spotify.com/playlist/2QTUvQfjO4Bcm3LqXzRoSp',
    },
    {
      name: 'Repo',
      url: 'https://github.com/HaiyanKong/workout',
    },
  ],
};

export default data;
