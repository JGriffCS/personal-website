const handler = (options = {}) => {
  return (req, res) => {
    const testPosts = [
      {
        id: 1,
        createdDate: new Date(),
        content: "I am the first blog post! I am particularly long in order to see how this whole thing goes. Also I should really see if I can get HTML to work in here. I <strong>mean</strong>, there's definitely a way to do that I think sooooo.",
        tags: [
          {
            name: 'Game Dev',
            color: 'white',
            background: 'darkblue',
          },
        ],
        title: "Blog Post 1",
      },
      {
        id: 2,
        createdDate: new Date(),
        content: "I am the second blog post!",
        tags: [
          {
            name: 'Game Dev',
            color: 'white',
            background: 'darkblue',
          },
        ],
        title: "Blog Post 2",
      },
      {
        id: 3,
        createdDate: new Date(),
        content: "I am the third blog post!",
        tags: [
          {
            name: 'Game Dev',
            color: 'white',
            background: 'darkblue',
          },
        ],
        title: "Blog Post 3",
      },
      {
        id: 4,
        createdDate: new Date(),
        content: "I am the fourth blog post!",
        tags: [
          {
            name: 'Game Dev',
            color: 'white',
            background: 'darkblue',
          },
        ],
        title: "Blog Post 4",
      },
      {
        id: 5,
        createdDate: new Date(),
        content: "I am the fifth blog post!",
        tags: [
          {
            name: 'Game Dev',
            color: 'white',
            background: 'darkblue',
          },
        ],
        title: "Blog Post 5",
      },
      {
        id: 6,
        createdDate: new Date(),
        content: "I am the sixth blog post!",
        tags: [
          {
            name: 'Game Dev',
            color: 'white',
            background: 'darkblue',
          },
        ],
        title: "Blog Post 6",
      },
    ];

    res.send(testPosts);
  }
}

module.exports = handler
