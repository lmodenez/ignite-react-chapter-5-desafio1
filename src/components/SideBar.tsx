import { Button } from './Button';
import { GenreResponseProps } from '../App';
import { memo } from 'react';

interface SidebarProps {
  genres: GenreResponseProps[];
  onClick: (genre_id: number) => void;
  selectedGenreId: number;
}

function SideBarComponent({ genres, onClick, selectedGenreId }: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

export const SideBar = memo(SideBarComponent);
