const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Read all MDX files and generate a JSON file with the data
function generateProjectsData() {
  const projectsDir = path.join(process.cwd(), 'src', 'app', 'work', 'projects');
  const files = fs.readdirSync(projectsDir).filter(file => file.endsWith('.mdx'));
  
  const projects = files.map(file => {
    const filePath = path.join(projectsDir, file);
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(rawContent);
    const slug = path.basename(file, '.mdx');
    
    return {
      slug,
      metadata: {
        title: data.title || '',
        publishedAt: data.publishedAt,
        summary: data.summary || '',
        image: data.image || '',
        images: data.images || [],
        tag: data.tag || [],
        team: data.team || [],
        link: data.link || '',
      },
      content
    };
  });
  
  // Write to public directory so it's accessible at runtime
  const outputPath = path.join(process.cwd(), 'public', 'projects-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(projects, null, 2));
  console.log(`Generated projects data: ${outputPath}`);
}

generateProjectsData();
