import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ModalProps {
  open: boolean;
  handleModal: () => void;
}

const list = [
  { id: 1, name: "Hindi" },
  { id: 2, name: "Hindi" },
  { id: 3, name: "Hindi" },
  { id: 4, name: "Hindi" },
  { id: 5, name: "Hindi" },
  { id: 6, name: "Hindi" },
  { id: 7, name: "Hindi" },
  { id: 8, name: "Hindi" },
  { id: 9, name: "Hindi" },
  { id: 10, name: "Hindi" },
  { id: 11, name: "Hindi" },
  { id: 12, name: "Hindi" },
  { id: 13, name: "Hindi" },
  { id: 14, name: "Hindi" },
  { id: 15, name: "Hindi" },
  { id: 16, name: "Hindi" },
  { id: 17, name: "Hindi" },
  { id: 18, name: "Hindi" },
  { id: 19, name: "Hindi" },
  { id: 20, name: "Hindi" },
  { id: 21, name: "Hindi" },
  { id: 22, name: "Hindi" },
  { id: 23, name: "Hindi" },
  { id: 24, name: "Hindi" },
  { id: 25, name: "Hindi" },
  { id: 26, name: "Hindi" },
  { id: 27, name: "Hindi" },
  { id: 28, name: "Hindi" },
];

const Location = ({ open, handleModal }: ModalProps) => {
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    // dispatch(searchThunk();
  };

  return (
    <Dialog onClose={handleModal} open={open} fullWidth maxWidth="sm">
      <DialogTitle className="flex justify-between gap-2 !p-4">
        <ArrowBackIcon
          onClick={handleModal}
          className="cursor-pointer self-center text-[#48cfad] font-bold"
        />
        <TextField
          name="search"
          type="search"
          value={search}
          onChange={onChangeSearch}
          placeholder="Search City"
          fullWidth
          InputProps={{
            onKeyPress: (event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
      </DialogTitle>
      <DialogContent className="!overflow-hidden !px-3">
        <Typography variant="h6" className="font-bold">
          All Cities
        </Typography>
        <Box className="m-2 mb-0 grid gap-1 max-h-[50vh] overflow-auto">
          {list.map((item) => (
            <Box key={item.id} className="flex gap-5 cursor-pointer">
              <Typography variant="body1">{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Location;
