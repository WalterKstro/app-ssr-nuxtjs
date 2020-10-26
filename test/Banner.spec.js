import { mount } from '@vue/test-utils'
import BannerBlog from '@/components/BannerBlog'

describe('BannerBlog', () => {
  test('Montaje del componente de Banner', () => {
    const wrapper = mount(BannerBlog)
    expect(wrapper.vm).toBeTruthy()
  })
})
