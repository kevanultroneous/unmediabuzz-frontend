import ContainerWrraper from '@/components/common/ContainerWrraper'
import GettingStarted from '@/components/common/GettingStarted'
import Layout from '@/components/common/Layout'
import Introduction from '@/components/Home/Introduction'
import PressReleaseHighlights from '@/components/Home/PressReleaseHighlights'

export default function Home() {
  return (
      <Layout>
        <Introduction />
        <PressReleaseHighlights/>
        <GettingStarted/>
      </Layout>
  )
}