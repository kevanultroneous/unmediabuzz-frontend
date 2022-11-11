import ContainerWrraper from '@/components/common/ContainerWrraper'
import GettingStarted from '@/components/common/GettingStarted'
import Layout from '@/components/common/Layout'
import PressReleaseHighlights from '@/components/Home/PressReleaseHighlights'

export default function Home() {
  return (
      <Layout>
        <PressReleaseHighlights/>
        <GettingStarted/>
      </Layout>
  )
}