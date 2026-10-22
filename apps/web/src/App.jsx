import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import KitchenRemodelingPage from './pages/KitchenRemodelingPage';
import BathroomRemodelingPage from './pages/BathroomRemodelingPage';
import GeneralContractingPage from './pages/GeneralContractingPage';
import HomeAdditionsPage from './pages/HomeAdditionsPage';
import SitemapPage from './pages/SitemapPage';
import NotFoundPage from './pages/NotFoundPage';
import Fema50PercentRuleGuidePage from './pages/Fema50PercentRuleGuidePage';
import RemodelingPermitsGuidePage from './pages/RemodelingPermitsGuidePage';
import RemodelingCostGuidePage from './pages/RemodelingCostGuidePage';
import TampaPage from './pages/TampaPage';
import BrandonPage from './pages/BrandonPage';
import HillsboroughCityPage from './pages/HillsboroughCityPage';
import CityPage from './pages/CityPage';
import {
    AboutPage,
    AreaDetailPage,
    AreasPage,
    CareersPage,
    ContactPage,
    FaqPage,
    FinancingPage,
    PrivacyPage,
    ProcessPage,
    ProjectsPage,
    QuotePage,
    ReviewsPage,
    SafetyPage,
    ServiceDetailPage,
    ServicesPage,
    TermsPage,
} from './pages/Pages';

// Adds a trailing slash to any non-root URL and redirects (client-side,
// via a history replace) to the trailing-slash canonical version. This
// mirrors the server-side RewriteRule in .htaccess; on hosts that ignore
// .htaccess it is the fallback that keeps the URL bar and canonical
// consistent with the sitemap.
const SlashNormalizer = ({ children }) => {
    const { pathname, search, hash } = useLocation();
    // Only normalize in the browser. During SSR/prerender the route is rendered
    // as-is so the full page content is emitted for every route regardless of
    // its trailing slash; the canonical tag (always trailing-slash) is what
    // declares the canonical URL, not the request path.
    if (typeof window !== 'undefined' && pathname !== '/' && !pathname.endsWith('/')) {
        return <Navigate to={`${pathname}/${search}${hash}`} replace />;
    }
    return children;
};

export const AppRoutes = () => (
    <SlashNormalizer>
        <ScrollToTop />
        <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/kitchen-remodeling" element={<KitchenRemodelingPage />} />
                <Route path="/services/bathroom-remodeling" element={<BathroomRemodelingPage />} />
                <Route path="/services/general-contracting" element={<GeneralContractingPage />} />
                <Route path="/services/home-additions" element={<HomeAdditionsPage />} />
                <Route path="/services/:slug" element={<ServiceDetailPage />} />
                <Route path="/areas-we-serve" element={<AreasPage />} />
                <Route path="/areas-we-serve/:slug" element={<AreaDetailPage />} />
                <Route path="/areas-we-serve/hillsborough/tampa" element={<TampaPage />} />
                <Route path="/areas-we-serve/hillsborough/brandon" element={<BrandonPage />} />
                <Route path="/areas-we-serve/hillsborough/:citySlug" element={<HillsboroughCityPage />} />
                <Route path="/areas-we-serve/sarasota/lakewood-ranch" element={<Navigate to="/areas-we-serve/manatee/lakewood-ranch" replace />} />
                <Route path="/areas-we-serve/:countySlug/:citySlug" element={<CityPage />} />
                <Route path="/hillsborough" element={<Navigate to="/areas-we-serve/hillsborough" replace />} />
                <Route path="/hillsborough/" element={<Navigate to="/areas-we-serve/hillsborough" replace />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/process" element={<ProcessPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/safety" element={<SafetyPage />} />
                <Route path="/financing" element={<FinancingPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/quote" element={<QuotePage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/sitemap" element={<SitemapPage />} />
                <Route path="/guides/fema-50-percent-rule" element={<Fema50PercentRuleGuidePage />} />
                <Route path="/guides/remodeling-permits-tampa-bay-sarasota" element={<RemodelingPermitsGuidePage />} />
                <Route path="/guides/remodeling-cost-tampa-bay" element={<RemodelingCostGuidePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </SlashNormalizer>
);

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App;
