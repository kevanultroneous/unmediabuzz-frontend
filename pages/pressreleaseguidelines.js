import styles from "@/styles/pressreleaseguidelines.module.css";
import ContainerWrraper from "@/components/common/ContainerWrraper";
import Layout from "@/components/common/Layout";
import CategoryHero from "@/components/PR/CategoryHero";
import { Image } from "react-bootstrap";
import GettingStarted from "@/components/common/GettingStarted";

const pressreleaseguidlines = () => {
  return (
    <>
      <Layout>
        <CategoryHero heading="Press Release Guidelines" />
        <ContainerWrraper customClass={styles.GuidlinesContainerWrraper}>
          <p>
            The editorial team at UN Media Buzz examines each press release
            before it is released to ensure it adheres to our established
            standards and is valuable to the media and other prospective
            readers. Releases sent to UN media buzz must have a newsworthy
            angle, be removed from advertising and promotion, and follow the
            suggested AP format. The approval process will be expedited, thereby
            preventing unnecessary delays.
          </p>

          <h1 className={styles.guidlineTitle}>Content requirements</h1>
          <p>
            The following requirements must be met for press releases to be
            considered for publication on this website. Before submitting your
            release to our editing staff, please make sure that it satisfies the
            following standards:
          </p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Newsworthiness
          </h2>
          <p>
            A newsworthy event, product, or service must be the subject of every
            press release. We do not accept releases that are only intended for
            marketing or advertising. The content must be supported by accurate
            data and provide the reader with real value.
          </p>
          <h2 className={styles.italicTitle}>
            Examples of newsworthy content include but are not limited to:
          </h2>
          <p>
            <li>
              New company product launches, website, hire, or personnel changes.
            </li>
            <li>
              Upcoming industry events such as trade shows, conferences,
              seminars, etc.
            </li>
            <li>
              Announcements of a Whitepaper release or new research study.
            </li>
            <li>Company Awards or Industry recognition.</li>
            <li>Store openings or company event announcements.</li>
            <li>Partnerships or deals between companies.</li>
            <li>New book, song or art installation announcement.</li>
            <li>
              Political Releases: Politically oriented releases will only be
              considered if they use civil and moderate political language. If
              the client enters the first-paragraph statement along the lines
              of, "The following is an open letter from X addressing Y," then
              political-oriented opinion editorial releases may also be
              considered.
            </li>
          </p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Fact - checked
          </h2>
          <p>
            The accuracy of every news release submitted to the website must be
            verified. We do not personally verify the information contained in
            the releases. Therefore, before it is submitted to UN Media Buzz,
            the content must be free of errors and false statements. Include the
            case number, court name, and supporting documents with your press
            release if it pertains to legal or political problems.
          </p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Copyrighted Content
          </h2>
          <p>
            All work must be original and unpublished. We do not allow the
            distribution of news articles on our website. We will reject the
            press release if it contains any text or graphics
            (image/videos/audio) that are copyrighted or that are copied from
            another source. All content in your release that contains quotes or
            facts must be properly cited to the sources. You must encapsulate
            any direct quotes in quotation marks. It is required that all links
            are active and they contain acceptable extensions (jpeg, png, gif,
            tiff, bmp, pdf, doc*, xl*, ps, rtf, ppt, mpeg, mp3, and mov only).
            Keep links to a minimum.
          </p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Maintain Objectivity
          </h2>
          <p>
            Press releases from UN Media Buzz should not contain hype flags or
            first-person/direct addresses (such as "you," "I," "us," etc.)
            unless they are part of a quotation from a company or organization's
            spokesperson. A direct address may indicate that the content is not
            a news release but an advertisement. The validity of your news
            release will also be called into question by hype flags like
            exclamation marks, exaggerated product/service promises, "AMAZING"
            written next to a product or service's name, or the use of capital
            letters to emphasize a point.
          </p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Contact Information
          </h2>
          <p>
            Specify the individual or business who is submitting the news
            release by name. You must provide their contact information, such as
            their phone number and/or email address. Press releases won't be
            allowed to be distributed if they don't include this information. If
            possible, the website of the company or individual should be
            included
          </p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Correct Grammar and Spelling
          </h2>
          <p>
            The best press releases are simple, succinct, and have a concrete
            news angle. Avoid using jargon and superlatives, and do not try to
            explain too much because these things will undermine rather than
            strengthen your statement. Before submitting your release, carefully
            proofread your draft to ensure that readers will understand who you
            are and your announcement's main idea by the introductory
            paragraph's conclusion. A single spelling error can ultimately
            damage your credibility.
          </p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Word Count
          </h2>
          <p>
            All press releases must be between 300 and 800 words in length. The
            news summary included with the release must also be no longer than
            two sentences. Your release's length directly impacts how widely it
            is distributed, and press releases that are excessively short or
            lengthy may have difficulty getting indexed by search engines.
          </p>
          <h1 className={styles.guidlineTitle}>Format guidelines</h1>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            A distinguishing heading and subheading
          </h2>
          <p>
            a compelling title that draws readers in and makes it obvious what
            the news is about—is it a product launch? Awards and acclaim?
            Acquisition or merger?
          </p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Location
          </h2>
          <p>
            It gives information about your location and the source of your
            news.
          </p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Powerful Lead
          </h2>
          <p>
            Here, you should briefly describe your newsworthy study or content.
          </p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Body
          </h2>
          <p>
            This section should be skimmable. Using quotations to support your
            statements throughout the body is a smart idea.
          </p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Boilerplate
          </h2>
          <p>Describe your business in a few words for the general public.</p>
          <h2 className={styles.subTitle}>
            <span className={styles.image}>
              <Image src="/assets/icons/guidline.png" />
            </span>
            Contact and information
          </h2>
          <p>
            Include the name and contact information for your executive
            communications or media coordinator. Usually, anyone who can offer
            more details.
          </p>
          <h1 className={styles.guidlineTitle}>
            WE DO NOT accept press releases regarding the <br /> following
            topics:
          </h1>
          <p style={{ padding: "2rem 0" }}>
            <li>
              Online gambling sites (including fantasy sports betting sites)
            </li>
            <li>Prescription and OTC Drugs</li>
            <li>Stock Recommendations</li>
            <li>
              Third-party legal content (the release must be from the
              representing firm)
            </li>
            <li>
              Streaming video publication sites (unless there is authorization
              from the creator)
            </li>
            <li>Market research reports</li>
            <li>Weight loss programs</li>
            <li>Health/sexual enhancement supplements</li>
            <li>Illegal mobile device unlocking services</li>
            <li>Payday loan sites</li>
            <li>Money-making schemes</li>
            <li>Unverified Celebrity endorsements</li>
            <li>Academic writing services (research papers, essays, etc.)</li>
          </p>
          <h1 className={styles.guidlineTitle}>
            For any other queries connect with us at <br />
            <a
              className={styles.GradiantHeading}
              href="mailto:contact@UNmediaBuzz.com"
            >
              contact@UNmediaBuzz.com
            </a>
          </h1>
        </ContainerWrraper>
        <GettingStarted />
      </Layout>
    </>
  );
};

export default pressreleaseguidlines;
