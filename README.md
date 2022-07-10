# nextjs-playground

📚 Learning and exploring Next.js.

> The React Framework for Production.
>
> -- <cite>https://nextjs.org</cite>


## Description

This is a runnable demonstration of Next.js focused on the Static Site Generation (SSG) use-case. 

Next.js has won its race. I'd like to learn it. Specifically, I'm often needing a way to create a static HTML page from
a set of small but always-changing data and I naturally find tools like Mustache templates (implemented in most languages),
Handlebars (JavaScript, Java and maybe others), Thymeleaf (Java), or I go the "duct tape route" and use find-and-replace
tools like `awk` which is what I do to generate my [GitHub profile README](https://github.com/dgroomes/dgroomes/blob/99ffd02eb0d146c62658a5d60447ae1f60598744/generate-readme.sh#L18).
This works, but it's sometimes underwhelming because you come to expect a more specialized, well-maintained, and well-documented
tool for solving a problem that is so common: Static Site Generation (SSG). While Handlebars is pretty great, I think JSX
is an evolution that's proven it's worth.

In comes Next.js and a groundswell of similar tools like [Gatsby](https://www.gatsbyjs.com/) and [Docusaurus](https://docusaurus.io/).
These tools draw their power from JSX and React. If a shell script with `awk` is a 2/10 on the complexity and sophistication scale for SSG, then these React-based
SSG tools are like a 9/10. They are daunting. Consider the dependency graph of Next.js:

* Next.js (a framework)
* ... depends on React (a framework)
* ... uses JSX (a language; which also has a cyclical dependency relationship with React)
* ... runs on Node (a runtime)

Is it necessary to have such power when I'm generating, say, a single HTML page which lists upcoming tour dates for my
favorite band? No, it's not necessary, but frankly it has become "the way". The Next.js docs are great, it's a mature piece
of software, and it will definitely solve my SSG needs. Let's learn it.

Note: I'm not exploring Next.js for Server Side Rendering (SSR). That is a separate topic.

## JSX: Coupled with React

If it was possible, I would love to cut down that dependency graph and use only JSX and a runtime like Node to run the
"generate my HTML" procedure. Why do I need the dynamic runtime bits of React, like React hooks or component lifecycles
if I'm generating static HTML? Well, a peculiar thing happened. While JSX proved itself a powerful hybrid of JavaScript
and HTML to express things like "Turn this array of strings into an HTML list", it has remained coupled to React. JSX
compiles down to `React.createElement` calls. So, if you use JSX you need to use React. There have been attempts to make
JSX work without React (like [render-jsx](https://github.com/loreanvictor/render-jsx)) but they have not thrived.

Compare the JSX-to-React "language-to-implementation" relationship with SQL. SQL is a beloved data language that is
implemented by dozens of backends. Consider how different SQLite is from PostgresQL, or from a commercial SQL database or
from a more unusual SQL environment like SQL on Apache Spark. These backend implementations are so diverse. You are free
to choose the backend that fits your needs, while not having to compromise on the language you know and love: SQL.

Can we get a form of JSX that compiles to straight HTML? Or compiles to web components? Or something else?


## Instructions

Follow these instructions to build the site and view it in your browser:

1. Install dependencies
   * ```shell
     npm install
     ```
1. Build the site
   * ```shell
     npm run build
     ```
   * The site was generated via SSG! See the `out/` directory.
   * The build step used the [Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export) feature
     of Next.js.
1. Serve and open in your browser
   * The build phase of the software delivery process is over. Our site exists as static HTML, JavaScript and CSS files.
     We can perform a hand-off to a server technology of our choice to *serve* the site. We can serve the site using a
     popular content server like Nginx, or we can use a Python server which is conveniently available on all Macs, or of
     course we can serve it with a Node-based server. Let's serve it with Python using the following command.
   * ```shell
      python3 -m http.server --directory out/
      ```
   * Open the browser and navigate to <http://localhost:8000>.

That's the end of the demo. In most cases, you'll likely use the Next.js development server while you develop you site.
See the [Next.js docs](https://nextjs.org/docs/getting-started) to continue your learning journey.

## Notes

Here are miscellaneous notes.

* There is great content in the Next.js docs. They offer a cohesive tutorial over a lot of modern front-end engineering
  concepts. By contrast, the docs are not meant as an intro to web development. Here is a snippet from the [*Foundations* docs](https://nextjs.org/learn/foundations/how-nextjs-works/rendering):
  * > On the client, the HTML is used to show a fast non-interactive page, while React uses the JSON data and JavaScript
      instructions to make components interactive (for example, attaching event handlers to a button). This process is
      called **hydration**.

## Reference

* [Next.js](https://nextjs.org/)
