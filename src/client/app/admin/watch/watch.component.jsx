import React from 'react';

// TODO: What is a pure component?!?!
class Watch extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      watchables: [
        { name: 'Hulu', imageUrl: 'hulu.com', link: 'https://www.hulu.com' },
        { name: 'Netflix', imageUrl: 'netflix.com', link: 'https://www.netflix.com' },
        { name: 'Crunchyroll', imageUrl: 'crunchyroll.com', link: 'https://www.crunchyroll.com' },
        { name: 'Youtube', imageUrl: 'youtube.com', link: 'https://www.youtube.com' },
        { name: 'Twitch', imageUrl: 'twitch.com', link: 'https://www.twitch.com' }
      ]
    }
  }
  render () {
    return (
      <div>
        {
          this.state.watchables.map((watchable) => {
            return (
              <div style={ { display: 'inline-block', width: '20%', textAlign: 'center' } }>
                <div>
                  <img src={`https://logo.clearbit.com/${watchable.imageUrl}?s=128`} />
                </div>
                <div>{watchable.name}</div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Watch;