import CompanyLogoLink from '@/components/common/CompanyLogoLink';

import FacebookIcon from '@/assets/footer/facebook.svg?react';
import InstagramIcon from '@./assets/footer/instagram.svg?react';
import TwitterIcon from '@/assets/footer/twitter.svg?react';

const HomeFooter = () => {
  return (
    <footer className="border-t-1 border-gray-300 pt-16">
      <CompanyLogoLink />
      <p className="text-secondary mt-8 max-w-[580px]">
        Мы не просто продаем обувь, мы продаем воспоминания и предметы
        коллекционирования. Мы собираем лучшее из лучшего, уделяя внимание всем
        мелким деталям. Мы знаем, что обувь говорит громче слов, поэтому мы
        освоили науку хороших кроссовок.
      </p>
      <div className="text-secondary mt-6 flex flex-wrap justify-between gap-6">
        <div className="flex gap-3">
          <p>Не упускайте шанса получить выгодные предложения:</p>
          <nav aria-label="Social media links">
            <ul className="flex gap-3">
              <li className="bg-background size-8 rounded-lg">
                <a
                  href="https://x.com"
                  target="_blank"
                  aria-label="Twitter"
                  className="flex size-full items-center justify-center"
                >
                  <TwitterIcon />
                </a>
              </li>
              <li className="bg-background size-8 rounded-lg">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="flex size-full items-center justify-center"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li className="bg-background size-8 rounded-lg">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="flex size-full items-center justify-center"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-2">
          <p>Линия поддержки:</p>
          <a href="tel:+250788467808">+250 788 467 808</a>
        </div>
        <p>Copyright 2025 © Sneaker City ltd</p>
      </div>
    </footer>
  );
};

export default HomeFooter;
