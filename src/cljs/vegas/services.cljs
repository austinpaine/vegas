(ns vegas.services)

(defn group-data [& names]
  (apply concat (for [n names]
                  (map-indexed (fn [i y] {:x i :y y :col n})
                               (take 20 (repeatedly #(rand-int 100)))))))
(group-data "monkey" "slipper" "broom")

(def line-plot
  {:data {:values (group-data "monkey" "slipper" "broom")}
   :encoding {:x {:field "x"}
              :y {:field "y"}
              :color {:field "col" :type "nominal"}}
   :mark "line"})

(def bubble-plot
  {:data {:values (group-data 4 6 9)}
   :mark "point"
   :encoding {:x {:field "x" :type "quantitative"}
              :y {:field "y" :type "quantitative"}
              :size {:field "col" :type "quantitative"}}})