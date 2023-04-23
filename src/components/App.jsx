import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MovieSearch } from 'pages/MovieSearch/MovieSearch';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';
import { Home } from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path="/movie" element={<MovieSearch />} />
          <Route path="/movie/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
  );
};