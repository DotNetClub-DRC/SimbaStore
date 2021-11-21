import {
  CardMedia,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from "@mui/material";
import { Product } from "../../app/models/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />
      <CardMedia
        sx={{
          height: 140,
          backgroundSize: "contain",
          bgcolor: "primary.main",
        }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="secondary">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.type} / {product.brand}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}
