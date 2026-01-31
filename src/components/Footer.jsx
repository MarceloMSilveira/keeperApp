import './footer.css'
export default function Footer() {
    
    const thisYear = new Date().getFullYear()

    return(
        <footer>
            <p>Copyright © {thisYear}</p>
        </footer>
    )
}