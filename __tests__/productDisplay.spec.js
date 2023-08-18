import { mount } from '@vue/test-utils'
import ProductDisplay from '../src/components/ProductDisplay.vue'

describe('ProductDisplay.vue Unit Test', () => {
    test('it should have Greyana Sofa as a title', () => {
        const wrapper = mount(ProductDisplay)
        expect(wrapper.text()).toMatch('Greyana Sofa')
    })
})