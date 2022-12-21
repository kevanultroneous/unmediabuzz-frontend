import { Image } from "react-bootstrap";

export const ButtonsList = {
  letsStart: {
    source: (
      <span>
        {/* <Image src="/assets/icons/send-icon.svg" alt="press-release" fluid /> */}
        &nbsp; Let’s Start Now
      </span>
    ),
    link: "/contact-us",
  },
  pressReleaseCommon: {
    source: (
      <span>
        {/* <Image
          src="/assets/icons/white-pr-icon.svg"
          alt="press-release"
          fluid
        /> */}
        &nbsp;&nbsp; &nbsp; Press Release
      </span>
    ),
    link: "/press-release",
  },
  viewCommon: {
    source: (
      <span>
        {/* <Image
          src="/assets/icons/white-pr-icon.svg"
          alt="press-release"
          fluid
        /> */}
        &nbsp;&nbsp;View All
      </span>
    ),
    link: "/press-release",
  },
  blogpostCommon: {
    source: (
      <span>
        {/* <Image
          src="/assets/icons/white-blog-icon.svg"
          alt="press-release"
          fluid
        /> */}
        &nbsp; &nbsp; &nbsp; &nbsp; Post Blogs
      </span>
    ),
    link: "/coming-soon",
  },
  GettingStartedButtonList: [
    {
      source: (
        <span>
          {/* <Image
            src="/assets/icons/press-release.svg"
            alt="press-release"
            fluid
          /> */}
          &nbsp;&nbsp;Press Release
        </span>
      ),
      link: "/press-release",
    },
    {
      source: (
        <span>
          {/* <Image
            src="/assets/icons/blog-post.svg"
            alt="press-release"
            height={25}
            fluid
          /> */}
          &nbsp;Post Blogs
        </span>
      ),
      link: "/coming-soon",
    },
  ],
  IntroButtonList: [
    {
      source: (
        <span style={{ display: "flex", alignItem: "center" }}>
          {/* <Image
            src="/assets/icons/white-pr-icon.svg"
            alt="press-release"
            fluid
          /> */}
          &nbsp;&nbsp;&nbsp;Press Release
        </span>
      ),
      link: "/press-release",
    },
    {
      source: (
        <span style={{ display: "flex", alignItem: "center" }}>
          {/* <Image
            src="/assets/icons/white-blog-icon.svg"
            alt="press-release"
            fluid
          /> */}
          &nbsp;&nbsp;Post Blogs
        </span>
      ),
      link: "/coming-soon",
    },
  ],
};
