import Link from 'next/link';

interface TagSidebarProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

const TagSidebar: React.FC<TagSidebarProps> = ({ tags, selectedTag, onTagSelect }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold">Tags</h2>
      <nav className="space-y-1">
        {tags.map(tag => (
          <Link key={tag} href={`/tags/${tag}`} onClick={() => onTagSelect(tag)}>
            <span className={`block p-2 ${selectedTag === tag ? 'bg-gray-200' : ''}`}>
              {tag}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default TagSidebar; 