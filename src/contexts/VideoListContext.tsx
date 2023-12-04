import { createContext, useContext, useState, FC, ReactNode } from 'react';

interface VideoContextState {
    videos: string[];
    setVideos: React.Dispatch<React.SetStateAction<string[]>>;
}

  interface VideoProviderProps {
    children: ReactNode;
  }

export const VideoContext = createContext<VideoContextState | undefined>(undefined);


export const VideoProvider: FC<VideoProviderProps> = ({ children }) => {

    const [videos, setVideos] = useState<string[]>([]);

    const providerValue = {
      videos,
      setVideos
      };

      return <VideoContext.Provider value={providerValue}>{children}</VideoContext.Provider>;

};

export function useVideo() {
    const context = useContext(VideoContext);
  
    if (!context) {
      throw new Error('useModal must be used within a ModalProvider');
    }
  
    return context;
  }