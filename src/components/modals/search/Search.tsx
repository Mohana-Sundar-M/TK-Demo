import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DialogContent from "@mui/material/DialogContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ModalProps {
  open: boolean;
  handleModal: () => void;
}

const list = [
  { id: 1, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 2, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 3, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 4, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 5, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 6, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 7, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 8, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 9, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 10, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 11, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 12, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 13, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 14, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 15, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
  { id: 16, name: "xyz", language: "Hindi", image: "./hanuman.jpeg" },
];

const Search = ({ open, handleModal }: ModalProps) => {
  const [search, setSearch] = useState<string>("");
  const [isMovies, setIsMovies] = useState<boolean>(true);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    // dispatch(searchThunk();
  };

  const handleMovies = () => {
    setIsMovies(true);
  };

  const handleTheaters = () => {
    setIsMovies(false);
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
          placeholder="Search Movies and Theaters"
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
        <ButtonGroup aria-label="Basic button group" className="w-full mb-2">
          <Button
            className="flex-1"
            variant={isMovies ? "contained" : "outlined"}
            onClick={handleMovies}
          >
            Movies
          </Button>
          <Button
            className="flex-1"
            variant={!isMovies ? "contained" : "outlined"}
            onClick={handleTheaters}
          >
            Theaters
          </Button>
        </ButtonGroup>
        <Box className="m-2 mb-0 grid gap-2 max-h-[50vh] overflow-auto">
          {list.map((item) => (
            <Box key={item.id} className="flex gap-4 cursor-pointer">
              <img
                className="object-contain h-[70px]"
                src={item.image}
                alt={item.name}
              />
              <Box>
                <Typography variant="body1" className="font-bold">
                  {item.name}
                </Typography>
                <Typography variant="body2">{item.language}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
