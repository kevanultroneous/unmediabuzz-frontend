import { Image } from "react-bootstrap";

export const ButtonsList = {
  letsStart: {
    source: (
      <span>
        <Image src="/assets/icons/send-icon.svg" alt="press-release" fluid />
        &nbsp; Let’s Start Now
      </span>
    ),
    link: "/",
  },
  pressReleaseCommon: {
    source: (
      <span>
        <Image
          src="/assets/icons/white-pr-icon.svg"
          alt="press-release"
          fluid
        />
        &nbsp;&nbsp; Press Release
      </span>
    ),
    link: "",
  },
  viewCommon: {
    source: (
      <span>
        <Image
          src="/assets/icons/white-pr-icon.svg"
          alt="press-release"
          fluid
        />
        &nbsp;&nbsp;View All
      </span>
    ),
    link: "",
  },
  blogpostCommon: {
    source: (
      <span>
        <Image
          src="/assets/icons/white-blog-icon.svg"
          alt="press-release"
          fluid
        />{" "}
        &nbsp; Post Blogs
      </span>
    ),
    link: "",
  },
  GettingStartedButtonList: [
    {
      source: (
        <span>
          <Image
            src="/assets/icons/press-release.svg"
            alt="press-release"
            fluid
          />
          &nbsp;&nbsp; Press Release
        </span>
      ),
      link: "",
    },
    {
      source: (
        <span>
          <Image
            src="/assets/icons/blog-post.svg"
            alt="press-release"
            height={25}
            fluid
          />{" "}
          &nbsp; Post Blogs
        </span>
      ),
      link: "",
    },
  ],
  IntroButtonList: [
    {
      source: (
        <span>
          <Image
            src="/assets/icons/white-pr-icon.svg"
            alt="press-release"
            fluid
          />
          &nbsp;&nbsp; Press Release
        </span>
      ),
      link: "",
    },
    {
      source: (
        <span>
          <Image
            src="/assets/icons/white-blog-icon.svg"
            alt="press-release"
            fluid
          />{" "}
          &nbsp; Post Blogs
        </span>
      ),
      link: "",
    },
  ],
};
