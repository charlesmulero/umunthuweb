/* Single source of truth for all projects.
   Edit text/images here; both projects.html and project-details.html read from it.
   Detail page URL format: project-details.html?project=<id> */
const IMG = '../assets/images/projects/';

window.UL_PROJECTS = [
  {
    id: 'streets-of-peace',
    title: 'Streets of Peace',
    tagline: 'Strengthening social cohesion through creative arts, dialogue and collective action',
    image: IMG + 'Streets-of-Peace/Streets-of-peace-3.jpg',
    summary: 'A youth-led peacebuilding initiative that uses creative arts and community engagement to promote dialogue and peaceful coexistence.',
    intro: [
      'Streets of Peace is a youth-led peacebuilding initiative that uses creative arts and community engagement to promote social cohesion, dialogue, and peaceful coexistence.',
      'The project recognizes the power of music, poetry, dance, theatre, storytelling, and other forms of creative expression to bring people together and provide young people with platforms to express their experiences, challenge harmful narratives, and promote positive messages within their communities.'
    ],
    sections: [
      {
        heading: 'Young people as ambassadors for peace',
        text: [
          'Through creative activities, community conversations, and youth engagement, Streets of Peace encourages young people to become ambassadors for peace and positive social change.',
          'The project creates opportunities for young people from different backgrounds to connect, appreciate diversity, address social challenges, and build relationships based on respect and shared humanity.'
        ],
        image: IMG + 'Community-justice-voice/Cover.jpg'
      },
      {
        heading: 'A platform for the issues that matter',
        text: [
          'The initiative also provides a platform for discussing issues that affect young people and communities, including violence, discrimination, social exclusion, substance abuse, political manipulation, and other factors that can contribute to conflict and division.'
        ],
        image: IMG + 'streets-of-peace/2.jpg'
      }
    ],
    closing: 'Streets of Peace reflects Umunthu Lead’s belief that creativity can become a powerful pathway for peace, participation, and community transformation.'
  },
  {
    id: 'community-justice-voice',
    title: 'Community Justice Voice',
    tagline: 'Amplifying community voices for social justice and accountability',
    image: IMG + 'community-justice-voice/cover.jpg',
    summary: 'A community engagement initiative that empowers citizens to understand their rights and advocate for accountability.',
    intro: [
      'Community Justice Voice is a community engagement initiative that empowers citizens to understand their rights, participate in community decision-making, and advocate for social justice and accountability.',
      'The project creates spaces for communities, particularly young people and marginalized groups, to discuss issues affecting their lives and identify practical ways of engaging with duty bearers and institutions responsible for delivering public services.'
    ],
    sections: [
      {
        heading: 'Dialogue, learning and participation',
        text: [
          'Through community dialogues, learning sessions, civic engagement, and participatory activities, Community Justice Voice strengthens people’s understanding of social justice, accountability, citizen responsibility, and meaningful participation.'
        ],
        image: IMG + 'community-justice-voice/1.jpg'
      },
      {
        heading: 'From identifying challenges to building solutions',
        text: [
          'The project encourages communities to move from simply identifying challenges to collectively developing solutions and engaging relevant stakeholders.',
          'It also promotes inclusive participation by creating opportunities for groups whose voices are often overlooked to contribute to discussions about development and governance.'
        ],
        image: IMG + 'community-justice-voice/2.jpg'
      }
    ],
    closing: 'Through Community Justice Voice, Umunthu Lead seeks to strengthen community voice, encourage responsible citizenship, and contribute to communities where people can claim their rights, demand accountability, and participate meaningfully in shaping decisions that affect them.'
  },
  {
    id: 'heritage-conversation',
    title: 'Heritage Conversation',
    tagline: 'Connecting communities through culture, heritage and dialogue',
    image: IMG + 'Heritage-Converstion/Cover.jpg',
    summary: 'A platform that brings communities together to explore culture, identity, history and traditions through dialogue.',
    intro: [
      'Heritage Conversation is a platform that brings communities together to explore culture, identity, history, traditions, and shared experiences through dialogue and creative engagement.',
      'The project recognizes that cultural heritage can play an important role in strengthening social cohesion and creating a sense of belonging.'
    ],
    sections: [
      {
        heading: 'Sharing stories across generations',
        text: [
          'By providing spaces for people to share stories, traditions, knowledge, and experiences, Heritage Conversation encourages intergenerational learning and appreciation of cultural diversity.',
          'The initiative engages young people and communities in conversations around heritage and identity while creating opportunities to document and celebrate local knowledge, traditions, stories, music, arts, and cultural practices.'
        ],
        image: IMG + 'heritage-conversation/1.jpg'
      },
      {
        heading: 'Culture as an entry point for dialogue',
        text: [
          'Heritage Conversation also uses culture as an entry point for discussing contemporary social issues and strengthening relationships between different groups.',
          'It encourages communities to recognize their shared humanity while appreciating the diversity that makes each community unique.'
        ],
        image: IMG + 'heritage-conversation/2.jpg'
      }
    ],
    closing: 'Through this initiative, Umunthu Lead seeks to preserve cultural knowledge, strengthen community identity, promote dialogue, and use heritage as a tool for building more connected and inclusive communities.'
  },
  {
    id: 'youth-leadership',
    title: 'Youth Leadership & Community Engagement Initiatives',
    shortTitle: 'Youth Leadership & Community Engagement',
    tagline: 'Empowering young people to lead change',
    image: IMG + 'youth-leadership/cover.jpg',
    summary: 'Youth-led initiatives that equip young people to take part in community development, civic life and peacebuilding.',
    intro: [
      'Umunthu Lead develops and supports youth-led initiatives that equip young people with opportunities to participate in community development, civic life, peacebuilding, and social change.'
    ],
    sections: [
      {
        heading: 'Learning by doing',
        text: [
          'Through leadership development, community engagement, creative activities, dialogue, volunteering, and practical community action, young people are encouraged to identify issues affecting their communities and contribute to solutions.'
        ],
        image: IMG + 'youth-leadership/1.jpg'
      },
      {
        heading: 'From recipients to leaders',
        text: [
          'These initiatives seek to move young people from being passive recipients of development to becoming active leaders, innovators, advocates, and community builders.'
        ],
        image: IMG + 'youth-leadership/2.jpg'
      }
    ],
    closing: 'By creating spaces for young people to learn, connect, organize, and lead, Umunthu Lead contributes to a generation of young people who are committed to service, social responsibility, inclusion, and positive community transformation.'
  }
];

window.ulProjectUrl = function (id) { return 'project-details.html?project=' + encodeURIComponent(id); };

window.ulCardHTML = function (p) {
  const name = p.shortTitle || p.title;
  return '<div class="col-12 col-md-6 col-lg-3"><a class="project-card" href="' + ulProjectUrl(p.id) + '">' +
    '<div class="project-card-img"><img src="' + p.image + '" alt="' + name + '" loading="lazy"></div>' +
    '<div class="project-card-body"><h3>' + name + '</h3><p>' + p.summary + '</p>' +
    '<span class="project-card-link">Read full project <i class="bx bx-right-arrow-alt"></i></span></div></a></div>';
};
