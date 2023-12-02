import { Button, TextField } from '@mui/material';
import CustomTheme from './components/CustomTheme';
import SearchIcon from '@mui/icons-material/Search';
import useMetadata from '@common/hooks/useMetadata';
import { ThemeProvider } from '@mui/material/styles';
import useDebounce from '@/common/hooks/useDebounce';

type Props = {
  title: string;
};

export default function Search(props: Readonly<Props>) {
  useMetadata(props.title);

  const [debouncedSearchKeyword, loading] = useDebounce('');
  const handleSearch = () => {
    console.log('Searching for:', debouncedSearchKeyword);
  };

  return (
    <div className="bg-no-repeat bg-search-bg bg-cover bg-center">
      <div className="flex items-center justify-center min-h-screen">
        <ThemeProvider theme={CustomTheme}>
          <TextField
            name="input_search"
            className="w-2/4 m-auto text-lg font-medium text-dark-moderate-blue-800 bg-white"
            placeholder="Nhập từ khoá tìm kiếm"
          />
        </ThemeProvider>
        <Button
          name="search_button"
          className="!w-20 !rounded-none !h-14 !bg-japonica-400 !rounded-r-xl !text-white disabled:!cursor-not-allowed disabled:!opacity-50"
          onClick={handleSearch}
          disabled={loading}
        >
          <SearchIcon className="!text-3xl" />
        </Button>
      </div>
    </div>
  );
}