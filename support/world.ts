import { Page } from 'playwright';

export let page: Page;

export function setPage(p: Page){
page = p;
}