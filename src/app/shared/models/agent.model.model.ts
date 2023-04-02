export interface Agent {
  abilities: Ability[];
  assetPath: string;
  background: string;
  backgroundGradientColors: string[];
  bustPortrait: string;
  characterTags: string;
  description: string;
  developerName: string;
  displayIcon: string;
  displayIconSmall: string;
  displayName: string;
  fullPortrait: string;
  fullPortraitV2: string;
  isAvaliableForTest: boolean;
  isBaseContent: boolean;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  killfeedPortrait: string;
  role: Role;
  uuid: string;
  voiceLine: {
    maxDuration: number;
    minDuration: number;
    mediaList: {
      id: number;
      wave: string;
      wwise: string;
    }
  };
}

export interface Ability {
  description: string;
  displayIcon: string;
  displayName: string;
  slot: string;
}

export interface Role {
  assetPath: string;
  description: string;
  displayIcon: string;
  displayName: string;
  uuid: string;
}