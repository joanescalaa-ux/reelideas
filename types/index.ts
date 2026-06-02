export interface Profile {
  nicho: string;
  icp: string;
  resultado: string;
  tono: string;
}

export interface ScrapedPost {
  username: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  timestamp: string;
}

export interface ReelIdea {
  hook: string;
  estructura: string[];
  cta: string;
  formato: 'educativo' | 'historia' | 'listicle' | 'contrarian' | 'caso real';
  por_que_funciona: string;
}

export interface GenerateRequest {
  profile: Profile;
  usernames: string[];
}

export interface GenerateResponse {
  ideas: ReelIdea[];
  notionUrl?: string;
  postsFound?: number;
  error?: string;
}
