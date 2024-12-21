const getEnv = (key: string, defaultValue?: string) => {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not set.`);
  }

  return value;
};

export const NEXT_APPWRITE_KEY = getEnv("NEXT_APPWRITE_KEY");
export const NEXT_PUBLIC_APPWRITE_ENDPOINT = getEnv("NEXT_PUBLIC_APPWRITE_ENDPOINT");
export const NEXT_PUBLIC_APPWRITE_PROJECT = getEnv("NEXT_PUBLIC_APPWRITE_PROJECT");
export const TRANSACTION_COLLECTION_ID = getEnv("APPWRITE_TRANSACTION_COLLECTION_ID");
export const BANK_COLLECTION_ID = getEnv("APPWRITE_BANK_COLLECTION_ID");
export const DATABASE_ID = getEnv("APPWRITE_DATABASE_ID");
export const USER_COLLECTION_ID = getEnv("APPWRITE_USER_COLLECTION_ID");
export const PLAID_CLIENT_ID = getEnv("PLAID_CLIENT_ID");
export const PLAID_SECRET = getEnv("PLAID_SECRET");
export const PLAID_PRODUCTS = getEnv("PLAID_PRODUCTS");
export const PLAID_COUNTRY_CODES = getEnv("PLAID_COUNTRY_CODES");
export const PLAID_ENV = getEnv("PLAID_ENV");
export const DWOLLA_ENV = getEnv("DWOLLA_ENV");
export const DWOLLA_KEY = getEnv("DWOLLA_KEY");
export const DWOLLA_SECRET = getEnv("DWOLLA_SECRET");

