import styled from 'styled-components'
import banner from '../../../../assets/tomb-raider.jpg'

export const HeaderBanner = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
`

export const BannerMain = styled.picture`
  background: url(${banner}) repeat-x center;
  background-size: cover;
  width: 80%;
  height: 450px;
  min-height: 1px;
`
