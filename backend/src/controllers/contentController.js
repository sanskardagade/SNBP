import {
  faqs,
  homeContent,
  news,
  programs,
  schools
} from "../data/siteContent.js";

export function getHealth(_req, res) {
  res.json({ status: "ok", service: "snbp-university-api" });
}

export function getHome(_req, res) {
  res.json(homeContent);
}

export function getPrograms(_req, res) {
  res.json(programs);
}

export function getNews(_req, res) {
  res.json(news);
}

export function getSchools(_req, res) {
  res.json(schools);
}

export function getFaqs(_req, res) {
  res.json(faqs);
}
