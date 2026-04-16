import { useEffect, useState } from 'react';
import styles from '../styles/cursor-image.module.css';

export default function CursorImage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if current element has pointer cursor
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const cursor = window.getComputedStyle(element).cursor;
        setIsPointer(cursor === 'pointer');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={styles.cursorImage}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible && !isPointer ? 1 : 0,
      }}
    >
      <img src="/butter-chicken.png" alt="butter chicken cursor" />
    </div>
  );
}
