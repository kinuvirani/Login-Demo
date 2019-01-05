import baseService from './baseService.js';

export function login(credentials)
{
    return baseService.post('/login',credentials);
}