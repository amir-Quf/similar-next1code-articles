import About from "./pages/about/About";
import AddArticle from "./pages/addArticle/AddArticle";
import Article from "./pages/article/Article";
import EditArticle from "./pages/editArticle/EditArticle";
import Home from "./pages/home/Home";

const routes = [
    {path: '/', element: <Home/>},
    {path: '/about', element: <About/>},
    {path: '/article/:articleId', element: <Article/>},
    {path: '/add-article', element: <AddArticle/>},
    {path: '/edit-article/:articleId', element: <EditArticle/>}
]

export default routes