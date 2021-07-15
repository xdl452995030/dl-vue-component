import { mount } from '@vue/test-utils'
import link from '../src/link.vue'

describe('Lg-Link', () => {
    test('Link-text', () => {
        const wrapper = mount(link)
        // console.log("wrapper==",wrapper)
        // expect(wrapper.html()).toContain('a href')
    })

})
