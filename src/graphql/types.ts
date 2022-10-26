import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Audio = {
  __typename?: 'Audio';
  autoPlay: Scalars['Boolean'];
  id: Scalars['Int'];
  url: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export enum MusicGenre {
  AcidBreaks = 'ACID_BREAKS',
  AcidHouse = 'ACID_HOUSE',
  AcidJazz = 'ACID_JAZZ',
  AcidRock = 'ACID_ROCK',
  AcidTechno = 'ACID_TECHNO',
  AcidTrance = 'ACID_TRANCE',
  Aggrotech = 'AGGROTECH',
  AlternativeDance = 'ALTERNATIVE_DANCE',
  AlternativeMetal = 'ALTERNATIVE_METAL',
  AlternativeRock = 'ALTERNATIVE_ROCK',
  Ambient = 'AMBIENT',
  AmbientDub = 'AMBIENT_DUB',
  AmbientHouse = 'AMBIENT_HOUSE',
  AmbientTechno = 'AMBIENT_TECHNO',
  AnarchoPunk = 'ANARCHO_PUNK',
  AntiFolk = 'ANTI_FOLK',
  ArtPunk = 'ART_PUNK',
  ArtRock = 'ART_ROCK',
  AsianUnderground = 'ASIAN_UNDERGROUND',
  AvantGardeJazz = 'AVANT_GARDE_JAZZ',
  Baggy = 'BAGGY',
  BalearicBeat = 'BALEARIC_BEAT',
  BaltimoreClub = 'BALTIMORE_CLUB',
  Bassline = 'BASSLINE',
  BeatMusic = 'BEAT_MUSIC',
  Bebop = 'BEBOP',
  BigBeat = 'BIG_BEAT',
  Bitpop = 'BITPOP',
  BlackMetal = 'BLACK_METAL',
  Boogie = 'BOOGIE',
  BoogieWoogie = 'BOOGIE_WOOGIE',
  BossaNova = 'BOSSA_NOVA',
  BouncyHouse = 'BOUNCY_HOUSE',
  BouncyTechno = 'BOUNCY_TECHNO',
  Breakbeat = 'BREAKBEAT',
  BreakbeatHardcore = 'BREAKBEAT_HARDCORE',
  Breakcore = 'BREAKCORE',
  Breakstep = 'BREAKSTEP',
  BritishDance = 'BRITISH_DANCE',
  Britpop = 'BRITPOP',
  BrokenBeat = 'BROKEN_BEAT',
  BubblegumDance = 'BUBBLEGUM_DANCE',
  CanterburyScene = 'CANTERBURY_SCENE',
  CapeJazz = 'CAPE_JAZZ',
  Celtic = 'CELTIC',
  CelticMetal = 'CELTIC_METAL',
  CelticPunk = 'CELTIC_PUNK',
  ChamberJazz = 'CHAMBER_JAZZ',
  ChicagoHouse = 'CHICAGO_HOUSE',
  Chillwave = 'CHILLWAVE',
  ChillOut = 'CHILL_OUT',
  ChineseRock = 'CHINESE_ROCK',
  Chiptune = 'CHIPTUNE',
  ChristianMetal = 'CHRISTIAN_METAL',
  ChristianPunk = 'CHRISTIAN_PUNK',
  ChristianRock = 'CHRISTIAN_ROCK',
  ClassicTrance = 'CLASSIC_TRANCE',
  Coldwave = 'COLDWAVE',
  ContemporaryFolk = 'CONTEMPORARY_FOLK',
  ContinentalJazz = 'CONTINENTAL_JAZZ',
  CoolJazz = 'COOL_JAZZ',
  CosmicDisco = 'COSMIC_DISCO',
  Cowpunk = 'COWPUNK',
  CrossoverJazz = 'CROSSOVER_JAZZ',
  CrossoverThrash = 'CROSSOVER_THRASH',
  Crunk = 'CRUNK',
  Crustgrind = 'CRUSTGRIND',
  CrustPunk = 'CRUST_PUNK',
  Cybergrind = 'CYBERGRIND',
  DancePop = 'DANCE_POP',
  DancePunk = 'DANCE_PUNK',
  DanceRock = 'DANCE_ROCK',
  Darkcore = 'DARKCORE',
  DarksideJungle = 'DARKSIDE_JUNGLE',
  Darkstep = 'DARKSTEP',
  DarkAmbient = 'DARK_AMBIENT',
  DarkCabaret = 'DARK_CABARET',
  DarkElectro = 'DARK_ELECTRO',
  DarkPsytrance = 'DARK_PSYTRANCE',
  DarkWave = 'DARK_WAVE',
  Deathcore = 'DEATHCORE',
  Deathrock = 'DEATHROCK',
  DeathIndustrial = 'DEATH_INDUSTRIAL',
  DeathMetal = 'DEATH_METAL',
  DeepHouse = 'DEEP_HOUSE',
  DesertRock = 'DESERT_ROCK',
  DetroitTechno = 'DETROIT_TECHNO',
  DigitalHardcore = 'DIGITAL_HARDCORE',
  Disco = 'DISCO',
  DiscoHouse = 'DISCO_HOUSE',
  DiscoPolo = 'DISCO_POLO',
  DivaHouse = 'DIVA_HOUSE',
  Dixieland = 'DIXIELAND',
  Djent = 'DJENT',
  Doomcore = 'DOOMCORE',
  DoomMetal = 'DOOM_METAL',
  Downtempo = 'DOWNTEMPO',
  DreamHouse = 'DREAM_HOUSE',
  DreamPop = 'DREAM_POP',
  DreamTrance = 'DREAM_TRANCE',
  Drone = 'DRONE',
  DroneMetal = 'DRONE_METAL',
  Drumfunk = 'DRUMFUNK',
  Drumstep = 'DRUMSTEP',
  DrumAndBass = 'DRUM_AND_BASS',
  Dub = 'DUB',
  Dubstep = 'DUBSTEP',
  Dubstyle = 'DUBSTYLE',
  Dubtronica = 'DUBTRONICA',
  DunedinSound = 'DUNEDIN_SOUND',
  DutchHouse = 'DUTCH_HOUSE',
  DBeat = 'D_BEAT',
  Edm = 'EDM',
  Electro = 'ELECTRO',
  Electroacoustic = 'ELECTROACOUSTIC',
  Electroclash = 'ELECTROCLASH',
  Electronica = 'ELECTRONICA',
  Electronicore = 'ELECTRONICORE',
  ElectronicArtMusic = 'ELECTRONIC_ART_MUSIC',
  ElectronicRock = 'ELECTRONIC_ROCK',
  Electropop = 'ELECTROPOP',
  Electropunk = 'ELECTROPUNK',
  ElectroBackbeat = 'ELECTRO_BACKBEAT',
  ElectroGrime = 'ELECTRO_GRIME',
  ElectroHouse = 'ELECTRO_HOUSE',
  ElectroIndustrial = 'ELECTRO_INDUSTRIAL',
  Emo = 'EMO',
  EpicDoom = 'EPIC_DOOM',
  EtherealWave = 'ETHEREAL_WAVE',
  EthnicElectronica = 'ETHNIC_ELECTRONICA',
  Eurobeat = 'EUROBEAT',
  Eurodance = 'EURODANCE',
  EuropeanFreeJazz = 'EUROPEAN_FREE_JAZZ',
  Europop = 'EUROPOP',
  EuroDisco = 'EURO_DISCO',
  ExperimentalRock = 'EXPERIMENTAL_ROCK',
  Filk = 'FILK',
  FloridaBreaks = 'FLORIDA_BREAKS',
  Folk = 'FOLK',
  Folktronica = 'FOLKTRONICA',
  FolkMetal = 'FOLK_METAL',
  FolkPunk = 'FOLK_PUNK',
  FolkRock = 'FOLK_ROCK',
  FourBeat = 'FOUR_BEAT',
  Freakbeat = 'FREAKBEAT',
  FreakFolk = 'FREAK_FOLK',
  Freestyle = 'FREESTYLE',
  FreestyleHouse = 'FREESTYLE_HOUSE',
  FreeTekno = 'FREE_TEKNO',
  FrenchHouse = 'FRENCH_HOUSE',
  FullOn = 'FULL_ON',
  FuneralDoom = 'FUNERAL_DOOM',
  Funky = 'FUNKY',
  FunkyHouse = 'FUNKY_HOUSE',
  FunkMetal = 'FUNK_METAL',
  Futurepop = 'FUTUREPOP',
  Gabber = 'GABBER',
  GaragePunk = 'GARAGE_PUNK',
  GarageRock = 'GARAGE_ROCK',
  Ghettotech = 'GHETTOTECH',
  GhettoHouse = 'GHETTO_HOUSE',
  GlamMetal = 'GLAM_METAL',
  GlamRock = 'GLAM_ROCK',
  Glitch = 'GLITCH',
  Goregrind = 'GOREGRIND',
  GothicMetal = 'GOTHIC_METAL',
  GothicRock = 'GOTHIC_ROCK',
  Grime = 'GRIME',
  Grindcore = 'GRINDCORE',
  GrooveMetal = 'GROOVE_METAL',
  Grunge = 'GRUNGE',
  HappyHardcore = 'HAPPY_HARDCORE',
  Hardbag = 'HARDBAG',
  HardcoreHardDance = 'HARDCORE_HARD_DANCE',
  HardcorePunk = 'HARDCORE_PUNK',
  Hardstep = 'HARDSTEP',
  Hardstyle = 'HARDSTYLE',
  HardBop = 'HARD_BOP',
  HardNrg = 'HARD_NRG',
  HardRock = 'HARD_ROCK',
  HardTrance = 'HARD_TRANCE',
  HeavyMetal = 'HEAVY_METAL',
  HipHouse = 'HIP_HOUSE',
  HiNrg = 'HI_NRG',
  HorrorPunk = 'HORROR_PUNK',
  House = 'HOUSE',
  Idm = 'IDM',
  Illbient = 'ILLBIENT',
  Indietronica = 'INDIETRONICA',
  IndieFolk = 'INDIE_FOLK',
  IndiePop = 'INDIE_POP',
  IndieRock = 'INDIE_ROCK',
  Industrial = 'INDUSTRIAL',
  IndustrialFolk = 'INDUSTRIAL_FOLK',
  IndustrialMetal = 'INDUSTRIAL_METAL',
  IndustrialRock = 'INDUSTRIAL_ROCK',
  IntelligentDrumAndBass = 'INTELLIGENT_DRUM_AND_BASS',
  ItaloDance = 'ITALO_DANCE',
  ItaloDisco = 'ITALO_DISCO',
  ItaloHouse = 'ITALO_HOUSE',
  Japanoise = 'JAPANOISE',
  JazzBlues = 'JAZZ_BLUES',
  JazzFunk = 'JAZZ_FUNK',
  JazzFusion = 'JAZZ_FUSION',
  JazzRap = 'JAZZ_RAP',
  JazzRock = 'JAZZ_ROCK',
  Jumpstyle = 'JUMPSTYLE',
  JumpUp = 'JUMP_UP',
  Krautrock = 'KRAUTROCK',
  Laptronica = 'LAPTRONICA',
  LatinHouse = 'LATIN_HOUSE',
  LatinJazz = 'LATIN_JAZZ',
  LiquidFunk = 'LIQUID_FUNK',
  Livetronica = 'LIVETRONICA',
  Lowercase = 'LOWERCASE',
  LoFi = 'LO_FI',
  Madchester = 'MADCHESTER',
  MainstreamJazz = 'MAINSTREAM_JAZZ',
  Makina = 'MAKINA',
  Mathcore = 'MATHCORE',
  MathRock = 'MATH_ROCK',
  MedievalMetal = 'MEDIEVAL_METAL',
  MelodicDeathMetal = 'MELODIC_DEATH_METAL',
  Metalcore = 'METALCORE',
  Minimal = 'MINIMAL',
  MinimalHouseMicrohouse = 'MINIMAL_HOUSE_MICROHOUSE',
  ModalJazz = 'MODAL_JAZZ',
  Moombahton = 'MOOMBAHTON',
  Neofolk = 'NEOFOLK',
  NeoBopJazz = 'NEO_BOP_JAZZ',
  NeoPsychedelia = 'NEO_PSYCHEDELIA',
  NeoSwing = 'NEO_SWING',
  Neurofunk = 'NEUROFUNK',
  NewAge = 'NEW_AGE',
  NewBeat = 'NEW_BEAT',
  NewJackSwing = 'NEW_JACK_SWING',
  NewProg = 'NEW_PROG',
  NewRave = 'NEW_RAVE',
  NewWave = 'NEW_WAVE',
  Nintendocore = 'NINTENDOCORE',
  Noise = 'NOISE',
  Noisegrind = 'NOISEGRIND',
  NoisePop = 'NOISE_POP',
  NoiseRock = 'NOISE_ROCK',
  Nortec = 'NORTEC',
  NoveltyRagtime = 'NOVELTY_RAGTIME',
  NoWave = 'NO_WAVE',
  NuDisco = 'NU_DISCO',
  NuJazz = 'NU_JAZZ',
  NuMetal = 'NU_METAL',
  NuSkoolBreaks = 'NU_SKOOL_BREAKS',
  OldschoolJungle = 'OLDSCHOOL_JUNGLE',
  OrchestralJazz = 'ORCHESTRAL_JAZZ',
  OrchestralUplifting = 'ORCHESTRAL_UPLIFTING',
  PaisleyUnderground = 'PAISLEY_UNDERGROUND',
  PopPunk = 'POP_PUNK',
  PopRock = 'POP_ROCK',
  PostBop = 'POST_BOP',
  PostBritpop = 'POST_BRITPOP',
  PostDisco = 'POST_DISCO',
  PostGrunge = 'POST_GRUNGE',
  PostHardcore = 'POST_HARDCORE',
  PostMetal = 'POST_METAL',
  PostPunk = 'POST_PUNK',
  PostPunkRevival = 'POST_PUNK_REVIVAL',
  PostRock = 'POST_ROCK',
  Powerviolence = 'POWERVIOLENCE',
  PowerElectronics = 'POWER_ELECTRONICS',
  PowerMetal = 'POWER_METAL',
  PowerNoise = 'POWER_NOISE',
  PowerPop = 'POWER_POP',
  Progressive = 'PROGRESSIVE',
  ProgressiveBreaks = 'PROGRESSIVE_BREAKS',
  ProgressiveDrumBass = 'PROGRESSIVE_DRUM_BASS',
  ProgressiveFolk = 'PROGRESSIVE_FOLK',
  ProgressiveHouse = 'PROGRESSIVE_HOUSE',
  ProgressiveMetal = 'PROGRESSIVE_METAL',
  ProgressiveRock = 'PROGRESSIVE_ROCK',
  ProgressiveTechno = 'PROGRESSIVE_TECHNO',
  Psybreaks = 'PSYBREAKS',
  PsychedelicFolk = 'PSYCHEDELIC_FOLK',
  PsychedelicRock = 'PSYCHEDELIC_ROCK',
  PsychedelicTrance = 'PSYCHEDELIC_TRANCE',
  Psychobilly = 'PSYCHOBILLY',
  Psyprog = 'PSYPROG',
  PunkJazz = 'PUNK_JAZZ',
  PunkRock = 'PUNK_ROCK',
  RagaRock = 'RAGA_ROCK',
  Raggacore = 'RAGGACORE',
  RaggaJungle = 'RAGGA_JUNGLE',
  Ragtime = 'RAGTIME',
  Rapcore = 'RAPCORE',
  RapMetal = 'RAP_METAL',
  RapRock = 'RAP_ROCK',
  RiotGrrrl = 'RIOT_GRRRL',
  RockAndRoll = 'ROCK_AND_ROLL',
  RockInOpposition = 'ROCK_IN_OPPOSITION',
  Sadcore = 'SADCORE',
  Sambass = 'SAMBASS',
  Screamo = 'SCREAMO',
  ShibuyaKei = 'SHIBUYA_KEI',
  Shoegaze = 'SHOEGAZE',
  SkatePunk = 'SKATE_PUNK',
  SkaJazz = 'SKA_JAZZ',
  SkaPunk = 'SKA_PUNK',
  Skweee = 'SKWEEE',
  Slowcore = 'SLOWCORE',
  SludgeMetal = 'SLUDGE_METAL',
  SmoothJazz = 'SMOOTH_JAZZ',
  SoftRock = 'SOFT_ROCK',
  SoulJazz = 'SOUL_JAZZ',
  SoundArt = 'SOUND_ART',
  SouthernRock = 'SOUTHERN_ROCK',
  SpaceDisco = 'SPACE_DISCO',
  SpaceHouse = 'SPACE_HOUSE',
  SpaceRock = 'SPACE_ROCK',
  Speedcore = 'SPEEDCORE',
  SpeedGarage = 'SPEED_GARAGE',
  SpeedMetal = 'SPEED_METAL',
  StonerRock = 'STONER_ROCK',
  StraightAheadJazz = 'STRAIGHT_AHEAD_JAZZ',
  StreetPunk = 'STREET_PUNK',
  StrideJazz = 'STRIDE_JAZZ',
  SufiRock = 'SUFI_ROCK',
  SungPoetry = 'SUNG_POETRY',
  Suomisaundi = 'SUOMISAUNDI',
  SurfRock = 'SURF_ROCK',
  Swing = 'SWING',
  SwingHouse = 'SWING_HOUSE',
  SymphonicMetal = 'SYMPHONIC_METAL',
  Synthcore = 'SYNTHCORE',
  Synthpop = 'SYNTHPOP',
  Synthpunk = 'SYNTHPUNK',
  TechnicalDeathMetal = 'TECHNICAL_DEATH_METAL',
  Techno = 'TECHNO',
  Technopop = 'TECHNOPOP',
  TechnoDnb = 'TECHNO_DNB',
  TechnoFolk = 'TECHNO_FOLK',
  Techstep = 'TECHSTEP',
  TechHouse = 'TECH_HOUSE',
  TechTrance = 'TECH_TRANCE',
  TecnoBrega = 'TECNO_BREGA',
  Terrorcore = 'TERRORCORE',
  ThirdStream = 'THIRD_STREAM',
  Thrashcore = 'THRASHCORE',
  ThrashMetal = 'THRASH_METAL',
  ToytownTechno = 'TOYTOWN_TECHNO',
  TraditionalDoom = 'TRADITIONAL_DOOM',
  TradJazz = 'TRAD_JAZZ',
  Trance = 'TRANCE',
  Trap = 'TRAP',
  TribalHouse = 'TRIBAL_HOUSE',
  TripHop = 'TRIP_HOP',
  Turbofolk = 'TURBOFOLK',
  TweePop = 'TWEE_POP',
  TwoStep = 'TWO_STEP',
  UpliftingTrance = 'UPLIFTING_TRANCE',
  Vaporwave = 'VAPORWAVE',
  VikingMetal = 'VIKING_METAL',
  VocalHouse = 'VOCAL_HOUSE',
  VocalJazz = 'VOCAL_JAZZ',
  VocalTrance = 'VOCAL_TRANCE',
  Western = 'WESTERN',
  WestCoastJazz = 'WEST_COAST_JAZZ',
  WitchHouseDrag = 'WITCH_HOUSE_DRAG',
  Worldbeat = 'WORLDBEAT',
  WorldFusion = 'WORLD_FUSION',
  YachtRock = 'YACHT_ROCK',
  YorkshireBleepsAndAss = 'YORKSHIRE_BLEEPS_AND_ASS'
}

export type PageMeta = {
  __typename?: 'PageMeta';
  /** The current page number in the dataset. */
  page: Scalars['Int'];
  /** The total number of pages in the dataset. */
  pages: Scalars['Int'];
  /** The total number of items in the dataset. */
  total: Scalars['Int'];
};

/** limit describes the size of the page and offset is where do we want to start the pagination */
export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  song: Song;
  /** Returns a paginated list of songs. */
  songs: SongResponse;
};


export type QuerySongArgs = {
  name: Scalars['String'];
};


export type QuerySongsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<SortInput>;
};

export type Song = {
  __typename?: 'Song';
  audio: Audio;
  author: Author;
  description: Scalars['String'];
  genre: MusicGenre;
  id: Scalars['Int'];
  image: Scalars['String'];
  name: Scalars['String'];
};

export type SongResponse = {
  __typename?: 'SongResponse';
  /** Metadata to aid in pagination. */
  pageMeta: PageMeta;
  /** The list of songs. */
  songs: Array<Song>;
};

/** sort is the direction of the sorting and the key is representing the key to be sorted */
export type SortInput = {
  key?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<SortOptions>;
};

export enum SortOptions {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type GetSongsQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']>;
  sortType?: InputMaybe<Scalars['String']>;
}>;


export type GetSongsQuery = { __typename?: 'Query', songs: { __typename?: 'SongResponse', songs: Array<{ __typename?: 'Song', id: number, name: string, description: string, genre: MusicGenre, image: string, author: { __typename?: 'Author', name: string }, audio: { __typename?: 'Audio', url: string } }> } };


export const GetSongsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSongs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"audio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSongsQuery, GetSongsQueryVariables>;