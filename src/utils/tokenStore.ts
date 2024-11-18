interface TokenData {
    accessToken: string;
    refreshToken: string;
  }
  
  const tokenStore: Record<number, TokenData> = {};
  
  export const setToken = (userId: number, accessToken: string, refreshToken: string): void => {
    tokenStore[userId] = { accessToken, refreshToken };
  };
  
  export const getToken = (userId: number): TokenData | null => {
    return tokenStore[userId] || null;
  };
  
  export const deleteToken = (userId: number): void => {
    delete tokenStore[userId];
  };
  
  export const getTokenStore = (): Record<number, TokenData> => {
    return tokenStore;
  };