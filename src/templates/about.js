import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import { htmlToReact } from "../utils";

export default class Project extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner">
            <article className="post project post-full">
              <header className="post-header inner-small">
                <h1 className="post-title line-top">
                  {_.get(this.props, "pageContext.frontmatter.title")}
                </h1>
                {_.get(this.props, "pageContext.frontmatter.subtitle") && (
                  <div className="post-subtitle">
                    {htmlToReact(
                      _.get(this.props, "pageContext.frontmatter.subtitle")
                    )}
                  </div>
                )}
              </header>
              <div class="grid">
                <ul id="hexGrid">
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>

                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>

                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    );
  }
}
