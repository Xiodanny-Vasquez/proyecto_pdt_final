import { useParams, Link, useNavigate } from "react-router-dom";
import { stories } from "../data/storiesData";
import { useCart } from "../context/CartContext"; // ← Importa el contexto

const StoryDetails = () => {
    const { slug } = useParams();
    const story = stories.find((s) => s.slug === slug);
    const { addToCart } = useCart(); // ← Usa la función
    const navigate = useNavigate();

    const handleAddToCart = () => {
        const item = {
            id: slug,
            title: story.title,
            price: parseInt(story.price.replace('.', '').replace(' COP', '')),
            image: story.cover
        };
        addToCart(item);
        navigate("/carrito");
    };

    if (!story) return <p style={{ color: "#fff", padding: 40 }}>Historia no encontrada.</p>;

    return (
        <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 16px", color: "#f5f5f5", textAlign: "center" }}>
            <Link to="/historias" style={{ color: "#e63946", textDecoration: "none", display: "block", textAlign: "left", marginBottom: 10 }}>
                ← Volver a historias
            </Link>

            <h1 style={{ marginTop: 16, fontFamily: "serif", color: "#ff0000" }}>{story.title}</h1>

            <img
                src={story.cover}
                alt={story.title}
                style={{
                    display: "block",
                    margin: "16px auto",
                    width: "80%",
                    maxHeight: 360,
                    objectFit: "cover",
                    borderRadius: 10,
                }}
            />

            <p style={{
                textAlign: "justify",
                lineHeight: 1.8,
                fontSize: "1.1rem",
                marginTop: 24,
                fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                whiteSpace: "pre-line"
            }}>
                {story.text}
            </p>

            <button
                onClick={handleAddToCart}
                style={{
                    marginTop: 24,
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: 6,
                    background: "#e63946",
                    color: "#fff",
                    cursor: "pointer",
                }}
            >
                Comprar libro – {story.price}
            </button>
        </div>
    );
};

export default StoryDetails;
