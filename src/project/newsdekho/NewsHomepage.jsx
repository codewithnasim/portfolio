import { useState, useEffect } from "react";

// News API key from your prompt
const API_KEY = "pub_80528ceb262edea80d9f3f67cd816816ba312";

export default function NewsHomepage() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("top");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en"); // Default language is English

  // Language options
  const languages = [
    { code: "en", name: "English" },
    { code: "bn", name: "Bengali" },
  ];

  // Categories for the navigation
  const categories = [
    { id: "top", name: language === "en" ? "Top Stories" : "শীর্ষ খবর" },
    { id: "world", name: language === "en" ? "World" : "বিশ্ব" },
    { id: "business", name: language === "en" ? "Business" : "ব্যবসা" },
    { id: "technology", name: language === "en" ? "Technology" : "প্রযুক্তি" },
    {
      id: "entertainment",
      name: language === "en" ? "Entertainment" : "বিনোদন",
    },
    { id: "sports", name: language === "en" ? "Sports" : "খেলাধুলা" },
    { id: "science", name: language === "en" ? "Science" : "বিজ্ঞান" },
    { id: "health", name: language === "en" ? "Health" : "স্বাস্থ্য" },
  ];

  // Fetch news based on category or search query
  useEffect(() => {
    setLoading(true);
    let apiUrl = `https://newsdata.io/api/1/news?apikey=${API_KEY}`;

    if (searchQuery) {
      apiUrl += `&q=${encodeURIComponent(searchQuery)}`;
    } else {
      apiUrl += `&category=${category}`;
    }

    apiUrl += `&language=${language}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("News data could not be fetched");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.results) {
          setNews(data.results);
        } else {
          setNews([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError(
          language === "en"
            ? "Failed to load news. Please try again later."
            : "সংবাদ লোড করতে ব্যর্থ হয়েছে। পরে আবার চেষ্টা করুন।"
        );
        setLoading(false);
      });
  }, [category, searchQuery, language]);

  // Format publication date
  const formatDate = (dateString) => {
    if (!dateString) return language === "en" ? "Unknown date" : "অজানা তারিখ";
    const date = new Date(dateString);

    if (language === "bn") {
      // Simplified Bengali date format
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      return date.toLocaleDateString("bn-BD", options);
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  // Handle category selection
  const handleCategoryChange = (cat) => {
    setSearchQuery("");
    setCategory(cat);
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCategory("");
    } else {
      setCategory("top");
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Change language
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Reset to top category when language changes
    setCategory("top");
    setSearchQuery("");
  };

  // Get localized text based on current language
  const getText = (enText, bnText) => {
    return language === "en" ? enText : bnText;
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1
                className={`text-2xl font-bold ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {language === "en"
                  ? "FactNest By Nasim"
                  : "ফ্যাক্ট নেস্ট - নাসিম"}
              </h1>
              <span
                className={`ml-2 px-2 py-1 text-xs font-bold rounded-md ${
                  darkMode ? "bg-blue-600" : "bg-blue-100 text-blue-800"
                }`}
              >
                {language === "en" ? "LIVE" : "লাইভ"}
              </span>
            </div>

            {/* Language Selector */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className={`mx-2 p-1 rounded text-sm ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-100"
              }`}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center px-2 py-1 rounded-lg bg-gray-100 flex-grow max-w-md mx-4"
            >
              <input
                type="text"
                placeholder={getText(
                  "Search for news...",
                  "খবর অনুসন্ধান করুন..."
                )}
                className="w-full bg-transparent border-none focus:outline-none text-gray-800 px-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className={`p-1 rounded-full ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                🔍
              </button>
            </form>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-yellow-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-4 overflow-x-auto pb-2">
            <ul className="flex space-x-4">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`whitespace-nowrap px-3 py-1 rounded-full text-sm font-medium 
                      ${
                        category === cat.id
                          ? darkMode
                            ? "bg-blue-600 text-white"
                            : "bg-blue-600 text-white"
                          : darkMode
                          ? "text-gray-300 hover:bg-gray-700"
                          : "text-gray-600 hover:bg-gray-200"
                      }`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Search */}
      <div
        className={`md:hidden ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        } px-4 py-2`}
      >
        <form
          onSubmit={handleSearch}
          className="flex items-center px-2 py-1 rounded-lg bg-white"
        >
          <input
            type="text"
            placeholder={getText("Search for news...", "খবর অনুসন্ধান করুন...")}
            className="w-full bg-transparent border-none focus:outline-none text-gray-800 px-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="p-1 rounded-full text-gray-500">
            🔍
          </button>
        </form>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Featured Story (first article) */}
        {loading ? (
          <div className="animate-pulse">
            <div
              className={`h-64 ${
                darkMode ? "bg-gray-700" : "bg-gray-300"
              } mb-4 rounded-lg`}
            ></div>
            <div
              className={`h-8 ${
                darkMode ? "bg-gray-700" : "bg-gray-300"
              } mb-4 rounded w-3/4`}
            ></div>
            <div
              className={`h-4 ${
                darkMode ? "bg-gray-700" : "bg-gray-300"
              } mb-2 rounded w-1/2`}
            ></div>
            <div
              className={`h-4 ${
                darkMode ? "bg-gray-700" : "bg-gray-300"
              } mb-2 rounded w-full`}
            ></div>
            <div
              className={`h-4 ${
                darkMode ? "bg-gray-700" : "bg-gray-300"
              } mb-2 rounded w-full`}
            ></div>
          </div>
        ) : error ? (
          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-red-900 text-red-200" : "bg-red-100 text-red-800"
            }`}
          >
            {error}
          </div>
        ) : news.length > 0 ? (
          <>
            {/* Featured Story */}
            <article className="mb-8">
              <div
                className={`rounded-lg overflow-hidden shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="relative">
                  <img
                    src={news[0].image_url || "/api/placeholder/800/400"}
                    alt={news[0].title || getText("News image", "সংবাদ ছবি")}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                    <span
                      className={`px-2 py-1 text-xs font-bold rounded-md bg-blue-600 text-white`}
                    >
                      {getText("FEATURED", "ফিচারড")}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                      {news[0].title}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm mb-4">
                    <span
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {news[0].source_id ||
                        getText("Unknown source", "অজানা উৎস")}{" "}
                      • {formatDate(news[0].pubDate)}
                    </span>
                  </div>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } mb-4`}
                  >
                    {news[0].description ||
                      news[0].content?.slice(0, 200) ||
                      getText(
                        "No description available.",
                        "কোন বিবরণ পাওয়া যায়নি।"
                      )}
                  </p>
                  <a
                    href={news[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-blue-600 font-medium hover:underline`}
                  >
                    {getText("Read full story →", "সম্পূর্ণ খবর পড়ুন →")}
                  </a>
                </div>
              </div>
            </article>

            {/* News Grid */}
            <h2
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {getText("Latest Stories", "সর্বশেষ সংবাদ")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.slice(1).map((item, index) => (
                <article
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-md ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } h-full flex flex-col`}
                >
                  <img
                    src={item.image_url || "/api/placeholder/400/200"}
                    alt={item.title || getText("News image", "সংবাদ ছবি")}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex-grow">
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        darkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center text-xs mb-2">
                      <span
                        className={`${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.source_id ||
                          getText("Unknown source", "অজানা উৎস")}{" "}
                        • {formatDate(item.pubDate)}
                      </span>
                    </div>
                    <p
                      className={`text-sm mb-4 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {(
                        item.description ||
                        item.content ||
                        getText(
                          "No description available.",
                          "কোন বিবরণ পাওয়া যায়নি।"
                        )
                      )?.slice(0, 100)}
                      ...
                    </p>
                  </div>
                  <div className="px-4 pb-4 mt-auto">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm text-blue-600 font-medium hover:underline`}
                    >
                      {getText("Read more →", "আরও পড়ুন →")}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div
            className={`p-8 text-center rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="text-xl font-medium mb-2">
              {getText("No news articles found", "কোন সংবাদ পাওয়া যায়নি")}
            </h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {getText(
                "Try a different category or search term",
                "ভিন্ন বিভাগ বা অনুসন্ধান শব্দ ব্যবহার করে দেখুন"
              )}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className={`mt-8 py-6 ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">
                {language === "en" ? "GlobalNews" : "গ্লোবাল নিউজ"}
              </h2>
              <p className="text-sm">
                {getText(
                  "Your trusted source for global news coverage",
                  "বিশ্বব্যাপী সংবাদ কভারেজের জন্য আপনার বিশ্বস্ত উৎস"
                )}
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                {getText("About", "সম্পর্কে")}
              </a>
              <a href="#" className="hover:underline">
                {getText("Contact", "যোগাযোগ")}
              </a>
              <a href="#" className="hover:underline">
                {getText("Privacy Policy", "গোপনীয়তা নীতি")}
              </a>
              <a href="#" className="hover:underline">
                {getText("Terms of Service", "সেবার শর্তাবলী")}
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              {language === "en" ? "GlobalNews" : "গ্লোবাল নিউজ"}.{" "}
              {getText("All rights reserved.", "সর্বস্বত্ব সংরক্ষিত।")}
            </p>
            <p className="mt-1 text-xs">
              {getText("Powered by NewsData.io", "NewsData.io দ্বারা চালিত")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
