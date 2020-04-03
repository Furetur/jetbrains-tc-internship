export type MissionData = {
  mission: string;
  launch: {
    years: number;
    months: number | null;
    date: number | null;
    hours: number | null;
    minutes: number | null;
    quarter: number | null;
  };
  vehicle: string;
  location: string;
};

export type DefinedTimeMissionData = {
  mission: string;
  launch: {
    years: number;
    months: number;
    date: number;
    hours: number;
    minutes: number;
    quarter: number;
  };
  vehicle: string;
  location: string;
};

const data: MissionData[] = [
  {
    mission: 'Starlink-3',
    launch: {
      years: 2020,
      months: 1,
      date: 7,
      hours: 2,
      minutes: 19,
      quarter: 1,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral AFS',
  },
  {
    mission: 'Crew Dragon In-Flight Abort Test (Suborbital)',
    launch: {
      years: 2020,
      months: 1,
      date: 19,
      hours: 15,
      minutes: 30,
      quarter: 1,
    },
    vehicle: 'Falcon 9',
    location: 'Kennedy Space Center',
  },
  {
    mission: 'Starlink-4',
    launch: {
      years: 2020,
      months: 1,
      date: 29,
      hours: 14,
      minutes: 6,
      quarter: 1,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral AFS',
  },
  {
    mission: 'Starlink-5',
    launch: {
      years: 2020,
      months: 2,
      date: 17,
      hours: 15,
      minutes: 5,
      quarter: 1,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral AFS',
  },
  {
    mission: 'CRS SpX-20 (Dragon)',
    launch: {
      years: 2020,
      months: 3,
      date: 7,
      hours: 4,
      minutes: 50,
      quarter: 1,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral AFS',
  },
  {
    mission: 'Starlink-6',
    launch: {
      years: 2020,
      months: 3,
      date: 14,
      hours: 13,
      minutes: 35,
      quarter: 1,
    },
    vehicle: 'Falcon 9',
    location: 'Kennedy Space Center',
  },
  {
    mission: 'SAOCOM-1B',
    launch: {
      years: 2020,
      months: 3,
      date: 30,
      hours: 23,
      minutes: 21,
      quarter: 1,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral AFS',
  },
  {
    mission: 'GPS III SV03 (Columbus)',
    launch: {
      years: 2020,
      months: 4,
      date: 29,
      hours: 11,
      minutes: 0,
      quarter: 2,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral AFS',
  },
  {
    mission: 'Starlink-7',
    launch: {
      years: 2020,
      months: 4,
      date: null,
      hours: null,
      minutes: null,
      quarter: 2,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral / KSC TBD',
  },
  {
    mission: 'Starlink-8',
    launch: {
      years: 2020,
      months: 5,
      date: null,
      hours: null,
      minutes: null,
      quarter: 2,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral / KSC TBD',
  },
  {
    mission: 'Crew Dragon Demo-2 (DM-2)',
    launch: {
      years: 2020,
      months: null,
      date: null,
      hours: null,
      minutes: null,
      quarter: 2,
    },
    vehicle: 'Falcon 9',
    location: 'Kennedy Space Center',
  },
  {
    mission: 'SXM-7',
    launch: {
      years: 2020,
      months: null,
      date: null,
      hours: null,
      minutes: null,
      quarter: 2,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral / KSC TBD',
  },
  {
    mission: 'GPS III SV04',
    launch: {
      years: 2020,
      months: 8,
      date: null,
      hours: null,
      minutes: null,
      quarter: 3,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral / KSC TBD',
  },
  {
    mission: 'SXM-8',
    launch: {
      years: 2020,
      months: null,
      date: null,
      hours: null,
      minutes: null,
      quarter: 3,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral / KSC TBD',
  },
  {
    mission: 'Crew-1 (USCV-1)',
    launch: {
      years: 2020,
      months: null,
      date: null,
      hours: null,
      minutes: null,
      quarter: 3,
    },
    vehicle: 'Falcon 9',
    location: 'Kennedy Space Center',
  },
  {
    mission: 'Türksat-5A',
    launch: {
      years: 2020,
      months: null,
      date: null,
      hours: null,
      minutes: null,
      quarter: 3,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral / KSC TBD',
  },
  {
    mission: 'CRS2 SpX-21',
    launch: {
      years: 2020,
      months: 10,
      date: null,
      hours: null,
      minutes: null,
      quarter: 4,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral / KSC TBD',
  },
  {
    mission: 'Sentinel-6',
    launch: {
      years: 2020,
      months: 11,
      date: null,
      hours: null,
      minutes: null,
      quarter: 4,
    },
    vehicle: 'Falcon 9',
    location: 'Vandenberg AFB',
  },
  {
    mission: 'AFSPC-44',
    launch: {
      years: 2020,
      months: null,
      date: null,
      hours: null,
      minutes: null,
      quarter: 4,
    },
    vehicle: 'Falcon Heavy',
    location: 'Kennedy Space Center',
  },
  {
    mission: 'SARah 1',
    launch: {
      years: 2020,
      months: null,
      date: null,
      hours: null,
      minutes: null,
      quarter: null,
    },
    vehicle: 'Falcon 9',
    location: 'Vandenberg AFB',
  },
  {
    mission: 'CRS2 SpX-22',
    launch: {
      years: 2020,
      months: null,
      date: null,
      hours: null,
      minutes: null,
      quarter: null,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral / KSC TBD',
  },
  {
    mission: 'Anasis-II',
    launch: {
      years: 2020,
      months: null,
      date: null,
      hours: null,
      minutes: null,
      quarter: null,
    },
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral / KSC TBD',
  },
  {
    mission: 'SmallSat Rideshare 1',
    launch: {
      years: 2020,
      months: null,
      date: null,
      hours: null,
      minutes: null,
      quarter: null,
    },
    vehicle: 'Falcon 9',
    location: 'Vandenberg AFB',
  },
  {
    mission: 'AFSPC-52',
    launch: {
      years: 2020,
      months: null,
      date: null,
      hours: null,
      minutes: null,
      quarter: null,
    },
    vehicle: 'Falcon Heavy',
    location: 'Kennedy Space Center',
  },
];

export default data;
