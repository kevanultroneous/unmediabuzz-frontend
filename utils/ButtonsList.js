import { Image } from "react-bootstrap";

export const ButtonsList = {
    GettingStartedButtonList:[
        {
            source:<span><Image src="/assets/icons/press-release.svg" alt="press-release" fluid />
                    &nbsp;&nbsp;
                    Press Release
                    </span>,
            link:""
        },
        {
            source:<span><Image src="/assets/icons/blog-post.svg" alt="press-release" height={25}/> &nbsp;
                    Post Blogs
                     </span>,
            link:""
        }
    ],
    IntroButtonList : [
        {   
            source:<span>
                        <Image src="/assets/icons/white-pr-icon.svg" alt="press-release" fluid />
                        &nbsp;&nbsp;
                        Press Release
                    </span>,
            link:""
        },
        {
            source:<span><Image src="/assets/icons/white-blog-icon.svg" alt="press-release" /> &nbsp;
                        Post Blogs
                    </span>,
            link:""
        }
    ]
}