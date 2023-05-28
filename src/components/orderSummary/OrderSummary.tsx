import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CartProduct } from "../../models/CartProduct.model";

const DELIVERY_FEES = 3;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(count: number, quantityType: number) {
  return count * quantityType;
}

function createRow(
  name: string,
  count: number,
  quantityType: string,
  costOfOneItem: number
) {
  const price = priceRow(count, costOfOneItem);
  return { name, count, quantityType, price };
}

interface Row {
  name: string;
  count: number;
  quantityType: string;
  price: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

export default function OrderSummary({
  products,
}: {
  products: CartProduct[];
}) {
  const rows = products.map((product) => {
    const { discount, price } = product;
    const productCost = !discount ? price : discount;
    return createRow(
      product.name,
      product.count,
      product.quantityType,
      productCost
    );
  });
  const invoiceSubtotal = subtotal(rows);
  const invoiceTotal = DELIVERY_FEES + invoiceSubtotal;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.count}</TableCell>
              <TableCell align="right">{row.quantityType}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal (incl. all tax)</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Delivery</TableCell>
            <TableCell align="right">
              {/* {`${(TAX_RATE * 100).toFixed(
              0
            )} %`} */}
            </TableCell>
            <TableCell align="right">{ccyFormat(DELIVERY_FEES)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
