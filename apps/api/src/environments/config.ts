
interface IConfig {
    production:boolean,
    db: string;
    jwtSecret?: string;
    googleId?: string;
    googleSecret?: string;
    awsAccessKey?: string;
    awsSecretKey?: string;
    addAuthorization: boolean;
    verbose: boolean;
    verboseApi: boolean;
    successRedirectUrl?: string;
    failureRedirectUrl?: string;
    emailHost?: string;
    emailPort?: number;
    emailUser?: string;
    emailPassword?: string;
    fromEmail?: string;
}

export {
    IConfig
};
