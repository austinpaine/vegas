(ns vegas.main-page
  (:require
    [day8.re-frame.http-fx]
    [reagent.dom :as rdom]
    [reagent.core :as r]
    [re-frame.core :as rf]
    [vegas.services :as services]
    [oz.core :as oz]))





(defn main-page []
  [:div "Wizards go CRAZY"]
  [:div
   [oz/vega-lite services/line-plot]
   [oz/vega-lite services/bubble-plot]]
  )