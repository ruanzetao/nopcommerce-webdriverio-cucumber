declare global {
    var TEST_ENVIRONMENT: string;
}

globalThis.TEST_ENVIRONMENT = 'dev';

export {};