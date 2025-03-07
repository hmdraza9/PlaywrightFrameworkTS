import { test } from '@playwright/test'

test('This is regression test @Regression', () =>{
    console.log('This is regression test')
})

test('This is smoke test @Smoke', () =>{
    console.log('This is smoke test')
})

test('This is progression test @Progression', () =>{
    console.log('This is progression test')
})

test('This is sanity test @sanity', () =>{
    console.log('This is sanity test')
})

