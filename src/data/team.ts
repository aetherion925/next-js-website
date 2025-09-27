export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
  githubLink: string;
  linkedinLink: string;
}

export const team: TeamMember[] = [
  {
    id: 'mark-id',
    name: 'Mark Estella',
    title: 'Technical Co-Founder & Lead Developer',
    image: '/team_images/mark-image.jpg',
    description: 'Mark leads the technical vision of Aetherion, ensuring all projects meet the highest standards of quality and innovation.',
    githubLink: 'https://github.com/markestella/',
    linkedinLink: 'https://www.linkedin.com/in/markestella/',
  },
  {
    id: 'farrah-id',
    name: 'Farrah Montaño',
    title: 'Co-Founder & Operations Director',
    image: '/team_images/farrah-image.jpg',
    description: 'Farrah oversees day-to-day operations, streamlining processes and ensuring smooth coordination between teams and clients.',
    githubLink: 'none',
    linkedinLink: 'https://www.linkedin.com/in/fatimah-aurora-montaño-8091682a9/',
  },
];