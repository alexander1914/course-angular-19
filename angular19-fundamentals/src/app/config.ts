import { InjectionToken } from "@angular/core";

//I'm learning more about InjectionToken and set up thinks to work him

export interface AppConfig {
    apiUrl: string;
    courseCacheSize: number;
}

export const APP_CONFIG: AppConfig = {
    apiUrl: 'http//localhost:9000',
    courseCacheSize: 10
}

export const CONFIG_TOKEN =
    new InjectionToken<AppConfig>('CONFIG_TOKEN',
        {
            providedIn: 'root',
            factory: () => APP_CONFIG
        }
    );