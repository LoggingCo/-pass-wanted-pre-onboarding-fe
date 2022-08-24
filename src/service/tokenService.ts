export default class TokenService {
    static set({ key, value }: { key: string; value: any }) {
        localStorage.setItem(key, value);
    }
    static get(key: string) {
        const token = localStorage.getItem(key);
        return token;
    }
    static remove(key: string) {
        localStorage.removeItem(key);
    }
}
